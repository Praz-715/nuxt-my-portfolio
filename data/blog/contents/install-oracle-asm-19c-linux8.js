import image0 from "../images/install-oracle-asm-19c-linux8/image0.png";
import image1 from "../images/install-oracle-asm-19c-linux8/image1.png";
import image2 from "../images/install-oracle-asm-19c-linux8/image2.png";
import image3 from "../images/install-oracle-asm-19c-linux8/image3.png";
import image4 from "../images/install-oracle-asm-19c-linux8/image4.png";
import image5 from "../images/install-oracle-asm-19c-linux8/image5.png";
import image6 from "../images/install-oracle-asm-19c-linux8/image6.png";
import image7 from "../images/install-oracle-asm-19c-linux8/image7.png";
import image8 from "../images/install-oracle-asm-19c-linux8/image8.png";
import image9 from "../images/install-oracle-asm-19c-linux8/image9.png";
import image10 from "../images/install-oracle-asm-19c-linux8/image10.png";
import image11 from "../images/install-oracle-asm-19c-linux8/image11.png";
import image12 from "../images/install-oracle-asm-19c-linux8/image12.png";
import image13 from "../images/install-oracle-asm-19c-linux8/image13.png";
import image14 from "../images/install-oracle-asm-19c-linux8/image14.png";
import image15 from "../images/install-oracle-asm-19c-linux8/image15.png";
import image16 from "../images/install-oracle-asm-19c-linux8/image16.png";
import image17 from "../images/install-oracle-asm-19c-linux8/image17.png";

import coverImage from "../images/install-oracle-asm-19c-linux8/coverImage.jpg";


export default {
    title: "Install Oracle ASM on Linux 8 Using UDEV (No ASMLib)",
    description: "Langkah mudah instalasi Oracle ASM pada Linux 8 menggunakan UDEV tanpa ASMLib",
    author: "Teguh Prasetyo",
    slug: "install-oracle-asm-19c-linux8",
    coverImage: coverImage,
    publishedAt: "2025-07-15",
    content: [
        {
            type: "heading2",
            text: "OS Konfigurasi"
        },
        {
            type: "heading3",
            text: "PreInstall"
        },
        {
            type: "code",
            lang: "bash",
            code: `
# Download preinstall jika ada internet
curl -o oracle-database-preinstall-19c-1.0-2.el8.x86_64.rpm https://yum.oracle.com/repo/OracleLinux/OL8/appstream/x86_64/getPackage/oracle-database-preinstall-19c-1.0-2.el8.x86_64.rpm

# Install 
yum -y install oracle-database-preinstall-19c-1.0-2.el8.x86_64.rpm
`,
        },
        {
            type: "heading3",
            text: "Konfigurasi /etc/hosts, SELINUX dan Firewall"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi /etc/hosts
vi /etc/selinux/config

# Set Permissive
SELINUX=permissive

setenforce 0

# Disable Firewall

systemctl stop firewalld
systemctl disable firewalld
`,
        },
        {
            type: "heading3",
            text: "Ilustrasi Struktur"
        },
        {
            type: "code",
            lang: "bash",
            code: `
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

`,
        },
        {
            type: "heading3",
            text: "Persiapan Disk ASM"
        },
        {
            type: "code",
            lang: "bash",
            code: `
lsblk
`,
        },
        {
            type: "code",
            lang: "bash",
            code: `
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
`,
        },
        {
            type: "heading3",
            text: "Kebutuhan"
        },
        {
            type: "code",
            lang: "bash",
            code: `
sda      100G (Untuk OS)
sdb       20G (Untuk +DATA)
sdc       20G (Untuk +DATA)
sdd       20G (Untuk +DATA)

sde       20G (Untuk +FRA)

# 60G Untuk DATA 20G untuk FRA
`,
        },
        {
            type: "heading3",
            text: "Cek WWID/ID_SERIAL Disk"
        },
        {
            type: "paragraph",
            text: "Jalankan untuk sdb,sdc,sdd,sde:"
        },
        {
            type: "code",
            lang: "bash",
            code: `
udevadm info --query=all --name=/dev/sdb | grep ID_SERIAL
udevadm info --query=all --name=/dev/sdc | grep ID_SERIAL
udevadm info --query=all --name=/dev/sdd | grep ID_SERIAL
udevadm info --query=all --name=/dev/sde | grep ID_SERIAL
`,
        },
        {
            type: "paragraph",
            text: "Contoh hasil:"
        },
        {
            type: "code",
            lang: "bash",
            code: `
E: ID_SERIAL=VBOX_HARDDISK_VB60b2ac00_xxxx
`,
        },

        {
            type: "heading3",
            text: "Buat UDEV Rules"
        },
        {
            type: "paragraph",
            text: "Contoh: kita ingin set /dev/sdb dan /dev/sdc agar dimiliki oleh user oracle dan group dba"
        },
        {
            type: "code",
            lang: "bash",
            code: `
cat <<EOF > /etc/udev/rules.d/99-oracle-asm.rules
ENV{ID_SERIAL}=="VBOX_HARDDISK_VB60b2ac00-6daa3d26", SYMLINK+="oracleasm/asm-data1", OWNER="oracle", GROUP="dba", MODE="0660"
ENV{ID_SERIAL}=="VBOX_HARDDISK_VBe6fd7d34-6e2d417f", SYMLINK+="oracleasm/asm-data2", OWNER="oracle", GROUP="dba", MODE="0660"
ENV{ID_SERIAL}=="VBOX_HARDDISK_VB835d1ee2-b33935b1", SYMLINK+="oracleasm/asm-data3", OWNER="oracle", GROUP="dba", MODE="0660"
ENV{ID_SERIAL}=="VBOX_HARDDISK_VBb8bacc53-3ac18aea", SYMLINK+="oracleasm/asm-fra1", OWNER="oracle", GROUP="dba", MODE="0660"
EOF

`,
        },
        {
            type: "heading3",
            text: "Reload UDEV dan Verifikasi"
        },
        {
            type: "code",
            lang: "bash",
            code: `
udevadm control --reload-rules
udevadm trigger

`,
        },
        {
            type: "paragraph",
            text: "Cek kepemilikan:"
        },
        {
            type: "code",
            lang: "bash",
            code: `
ls -l /dev/oracleasm/
`,
        },
        {
            type: "code",
            lang: "bash",
            code: `
lrwxrwxrwx. 1 root root 6 Jul 10 11:33 asm-data1 -> ../sdb
lrwxrwxrwx. 1 root root 6 Jul 10 11:33 asm-data2 -> ../sdc
lrwxrwxrwx. 1 root root 6 Jul 10 11:33 asm-data3 -> ../sdd
lrwxrwxrwx. 1 root root 6 Jul 10 11:33 asm-fra1 -> ../sde
`,
        },
        {
            type: "heading2",
            text: "Install Oracle Grid Infrastructure (Stand-alone)"
        },
        {
            type: "paragraph",
            text: "Menggunakan user oracle"
        },
        {
            type: "heading3",
            text: "Buat env grid"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi grid.env
`,
        },
        {
            type: "code",
            lang: "bash",
            code: `
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
`,
        },
        {
            type: "heading3",
            text: "Jalankan env grid"
        },
        {
            type: "code",
            lang: "bash",
            code: `
. grid.env
`,
        },
        {
            type: "heading3",
            text: "Buat Folder untuk Oracle Grid"
        },
        {
            type: "code",
            lang: "bash",
            code: `
mkdir -p $ORACLE_HOME
mkdir -p $ORACLE_BASE
mkdir -p $ORA_INVENTORY
`,
        },
        {
            type: "heading3",
            text: "Upload File dan copy ke Oracle home"
        },
        {
            type: "code",
            lang: "bash",
            code: `
unzip -qq LINUX.X64_193000_grid_home.zip -d $ORACLE_HOME
`,
        },
        {
            type: "heading3",
            text: "Install Grid"
        },
        {
            type: "code",
            lang: "bash",
            code: `
cd $ORACLE_HOME
./gridSetup.sh
`,
        },
        {
            type: "image",
            src: image0,
            alt: "-"
        },
        {
            type: "heading3",
            text: "Ubah Normal menjadi external, ASM yang digunakan tidak menjadi redudansi"
        },
        {
            type: "image",
            src: image1,
            alt: "-"
        },
        {
            type: "image",
            src: image2,
            alt: "-"
        },
        {
            type: "image",
            src: image3,
            alt: "-"
        },
        {
            type: "image",
            src: image4,
            alt: "-"
        },
        {
            type: "image",
            src: image5,
            alt: "-"
        },
        {
            type: "image",
            src: image6,
            alt: "-"
        },
        {
            type: "image",
            src: image7,
            alt: "-"
        },
        {
            type: "image",
            src: image8,
            alt: "-"
        },
        {
            type: "image",
            src: image9,
            alt: "-"
        },
        {
            type: "heading3",
            text: "Install CV disk"
        },
        {
            type: "paragraph",
            text: "Menggunakan user root"
        },
        {
            type: "code",
            lang: "bash",
            code: `
cd /oracle/product/grid_home/cv/rpm/
yum install -y cvuqdisk-1.0.10-1.rpm
`,
        },
        {
            type: "image",
            src: image10,
            alt: "-"
        },
        {
            type: "image",
            src: image11,
            alt: "-"
        },
        {
            type: "image",
            src: image12,
            alt: "-"
        },
        {
            type: "image",
            src: image13,
            alt: "-"
        },
        {
            type: "heading3",
            text: "Jalankan di user root"
        },
        {
            type: "code",
            lang: "bash",
            code: `
/oracle/product/oraInventory/orainstRoot.sh
/oracle/product/grid_home/root.sh
`,
        },
        {
            type: "image",
            src: image14,
            alt: "-"
        },
        {
            type: "heading3",
            text: "Tambah Diskgroup FRA"
        },
        {
            type: "code",
            lang: "bash",
            code: `
asmca
`,
        },
        {
            type: "image",
            src: image15,
            alt: "-"
        },
        {
            type: "image",
            src: image16,
            alt: "-"
        },
        {
            type: "image",
            src: image17,
            alt: "-"
        },


    ]
}