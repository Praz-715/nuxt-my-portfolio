# Install Oracle ASM on OL8 Using UDEV (No ASMLib)

## PreInstall

```bash

# Download preinstall jika ada internet
curl -o oracle-database-preinstall-19c-1.0-2.el8.x86_64.rpm https://yum.oracle.com/repo/OracleLinux/OL8/appstream/x86_64/getPackage/oracle-database-preinstall-19c-1.0-2.el8.x86_64.rpm

# Install 
yum -y install oracle-database-preinstall-19c-1.0-2.el8.x86_64.rpm
```

## Konfigurasi /etc/hosts dan SELINUX

```bash
vi /etc/hosts
vi /etc/selinux/config

# Set Permissive
SELINUX=permissive

setenforce 0

# Disable Firewall

systemctl stop firewalld
systemctl disable firewalld
```

## Persiapan Disk ASM

```bash
[root@ol8-db ~]# lsblk
NAME                   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda                      8:0    0  100G  0 disk
├─sda1                   8:1    0    1G  0 part /boot
└─sda2                   8:2    0   99G  0 part
  ├─ol_testserver-root 252:0    0 63.9G  0 lvm  /
  ├─ol_testserver-swap 252:1    0    4G  0 lvm  [SWAP]
  └─ol_testserver-home 252:2    0 31.2G  0 lvm  /home
sdb                      8:16   0   20G  0 disk
sdc                      8:32   0   20G  0 disk
sdd                      8:48   0   20G  0 disk
sde                      8:64   0   20G  0 disk
sr0                     11:0    1 1024M  0 rom
```

```bash
sda      100G (Untuk OS)
sdb       20G (Untuk +DATA)
sdc       20G (Untuk +DATA)
sdd       20G (Untuk +DATA)

sde       20G (Untuk +FRA)

# 60G Untuk DATA 20G untuk FRA
```

## Tujuan Utama Pemisahan `+DATA` dan `+FRA`

### 1. ✅ **Isolasi Beban Kerja (I/O Isolation)**

- **+DATA** berisi file penting untuk operasi normal database:
    - datafile (isi tabel dan index)
    - control file
    - redo log (kadang juga)
- **+FRA** berisi file untuk pemulihan:
    - archive log
    - backup RMAN
    - flashback log
    - control file backup

📌 Jika keduanya digabung dalam satu diskgroup, I/O beban akan saling mengganggu. Misalnya:

- Saat backup jalan dan archive log menumpuk → bisa ganggu query harian.

---

### 2. ✅ **Manajemen Kuota dan Kebijakan Retensi**

- Diskgroup `+FRA` bisa diberi ukuran terbatas, misalnya 100 GB, agar:
    - Archive log tidak menghabiskan seluruh storage.
    - Bisa terapkan kebijakan **retensi backup** (misalnya simpan 3 hari terakhir).

---

### 3. ✅ **Penghapusan Otomatis oleh Oracle**

- Oracle **secara otomatis** bisa menghapus file lama di FRA jika penuh.
- Jika `+FRA` dan `+DATA` digabung, maka penghapusan otomatis bisa **menghapus file penting** secara tidak sengaja.

---

### 4. ✅ **Backup Lebih Fleksibel**

- Bisa backup seluruh `+DATA` ke tape atau cloud.
- Sementara `+FRA` bisa disinkronkan atau dipindahkan terpisah (misalnya ke Data Guard atau lokasi lain).

---

### 5. ✅ **Desain High Availability / Disaster Recovery**

- Di Data Guard, biasanya `+DATA` disinkron secara real-time (redo), sementara `+FRA` bisa berisi archive log dan flashback.
- Penempatan di storage berbeda memudahkan pengelolaan DR dan performa.

## Ilustrasi Struktur

```bash
+DATA
 ├── SYSTEM.dbf
 ├── USERS.dbf
 ├── SYSAUX.dbf
 └── redo01.log, redo02.log

+FRA
 ├── ARCHIVELOG/
 ├── BACKUPSET/
 ├── AUTOBACKUP/
 └── FLASHBACK/

```

## Cek WWID/ID_SERIAL Disk

Jalankan untuk `sdb,sdc,sdd,sde`:

```bash
udevadm info --query=all --name=/dev/sdb | grep ID_SERIAL
udevadm info --query=all --name=/dev/sdc | grep ID_SERIAL
udevadm info --query=all --name=/dev/sdd | grep ID_SERIAL
udevadm info --query=all --name=/dev/sde | grep ID_SERIAL
```

Contoh hasil:

```bash
E: ID_SERIAL=VBOX_HARDDISK_VB60b2ac00_xxxx
```

## Buat UDEV Rules

Contoh: kita ingin set `/dev/sdb` dan `/dev/sdc` agar dimiliki oleh user `oracle` dan group `dba`.

```bash
cat <<EOF > /etc/udev/rules.d/99-oracle-asm.rules
ENV{ID_SERIAL}=="VBOX_HARDDISK_VB60b2ac00-6daa3d26", SYMLINK+="oracleasm/asm-data1", OWNER="oracle", GROUP="dba", MODE="0660"
ENV{ID_SERIAL}=="VBOX_HARDDISK_VBe6fd7d34-6e2d417f", SYMLINK+="oracleasm/asm-data2", OWNER="oracle", GROUP="dba", MODE="0660"
ENV{ID_SERIAL}=="VBOX_HARDDISK_VB835d1ee2-b33935b1", SYMLINK+="oracleasm/asm-data3", OWNER="oracle", GROUP="dba", MODE="0660"
ENV{ID_SERIAL}=="VBOX_HARDDISK_VBb8bacc53-3ac18aea", SYMLINK+="oracleasm/asm-fra1", OWNER="oracle", GROUP="dba", MODE="0660"
EOF

```

## Reload UDEV dan Verifikasi

```bash
udevadm control --reload-rules
udevadm trigger

```

Cek kepemilikan:

```bash
ls -l /dev/oracleasm/
```

```bash
[root@ol8-db ~]# ls -l /dev/oracleasm/
total 0
lrwxrwxrwx. 1 root root 6 Jul 10 11:33 asm-data1 -> ../sdb
lrwxrwxrwx. 1 root root 6 Jul 10 11:33 asm-data2 -> ../sdc
lrwxrwxrwx. 1 root root 6 Jul 10 11:33 asm-data3 -> ../sdd
lrwxrwxrwx. 1 root root 6 Jul 10 11:33 asm-fra1 -> ../sde

```

## Install Oracle Grid Infrastructure (Stand-alone)

Menggunakan user oracle

## Buat env grid

```bash
vi grid.env
```

```bash
# Oracle Settings
export TMP=/tmp
export TMPDIR=$TMP
export ORACLE_SID=+ASM

export ORACLE_HOME=/oracle/product/grid_home
export ORACLE_BASE=/oracle/product/orabase
export ORA_INVENTORY=/oracle/product/oraInventory

export PATH=/usr/sbin:/usr/local/bin:$PATH
export PATH=$ORACLE_HOME/bin:$PATH

export LD_LIBRARY_PATH=$ORACLE_HOME/lib:/lib:/usr/lib
export CLASSPATH=$ORACLE_HOME/jlib:$ORACLE_HOME/rdbms/jlib

# Fake Oracle Linux 7.
export CV_ASSUME_DISTID=OEL7.6
```

## Jalankan env grid

```bash
. grid.env
```

## Buat Folder

```bash
mkdir -p $ORACLE_HOME
```

## **Upload File dan copy ke Oracle home**

```bash
unzip -qq LINUX.X64_193000_grid_home.zip -d $ORACLE_HOME
```

## Install Grid

```bash
cd $ORACLE_HOME
./gridSetup.sh
```

![image.png](image.png)

## Ubah Normal menjadi external, ASM yang digunakan tidak menjadi redudansi

![image.png](image%201.png)

![image.png](image%202.png)

![image.png](image%203.png)

![image.png](image%204.png)

![image.png](image%205.png)

![image.png](image%206.png)

![image.png](image%207.png)

![image.png](image%208.png)

![image.png](image%209.png)

## Install CV disk

Menggunakan user root

```bash
cd /oracle/product/grid_home/cv/rpm/
yum install -y cvuqdisk-1.0.10-1.rpm
```

![image.png](image%2010.png)

![image.png](image%2011.png)

![image.png](image%2012.png)

![image.png](image%2013.png)

## Jalankan di user root

```bash
/oracle/product/oraInventory/orainstRoot.sh
/oracle/product/grid_home/root.sh
```

![image.png](image%2014.png)

## Tambah Diskgroup FRA

```bash
asmca
```

![image.png](image%2015.png)

![image.png](image%2016.png)

![image.png](image%2017.png)