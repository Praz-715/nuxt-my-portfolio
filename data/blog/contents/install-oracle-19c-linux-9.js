import image0 from "../images/install-oracle-19c-linux9/image0.png";
import image1 from "../images/install-oracle-19c-linux9/image1.png";
import image2 from "../images/install-oracle-19c-linux9/image2.png";
import image3 from "../images/install-oracle-19c-linux9/image3.png";
import image4 from "../images/install-oracle-19c-linux9/image4.png";
import image5 from "../images/install-oracle-19c-linux9/image5.png";
import image6 from "../images/install-oracle-19c-linux9/image6.png";
import image7 from "../images/install-oracle-19c-linux9/image7.png";
import image8 from "../images/install-oracle-19c-linux9/image8.png";
import image9 from "../images/install-oracle-19c-linux9/image9.png";
import image10 from "../images/install-oracle-19c-linux9/image10.png";
import image11 from "../images/install-oracle-19c-linux9/image11.png";
import image12 from "../images/install-oracle-19c-linux9/image12.png";
import image13 from "../images/install-oracle-19c-linux9/image13.png";
import image14 from "../images/install-oracle-19c-linux9/image14.png";
import image15 from "../images/install-oracle-19c-linux9/image15.png";
import image16 from "../images/install-oracle-19c-linux9/image16.png";
import image17 from "../images/install-oracle-19c-linux9/image17.png";
import image18 from "../images/install-oracle-19c-linux9/image18.png";
import image19 from "../images/install-oracle-19c-linux9/image19.png";
import image20 from "../images/install-oracle-19c-linux9/image20.png";
import image21 from "../images/install-oracle-19c-linux9/image21.png";
import image22 from "../images/install-oracle-19c-linux9/image22.png";
import image23 from "../images/install-oracle-19c-linux9/image23.png";
import image24 from "../images/install-oracle-19c-linux9/image24.png";
import image25 from "../images/install-oracle-19c-linux9/image25.png";
import image26 from "../images/install-oracle-19c-linux9/image26.png";
import image27 from "../images/install-oracle-19c-linux9/image27.png";
import image28 from "../images/install-oracle-19c-linux9/image28.png";
import image29 from "../images/install-oracle-19c-linux9/image29.png";
import image30 from "../images/install-oracle-19c-linux9/image30.png";
import image31 from "../images/install-oracle-19c-linux9/image31.png";
// import image32 from "../images/install-oracle-19c-linux9/image32.png";
import coverImage from "../images/install-oracle-19c-linux9/coverImage.jpg";


export default {
    title: "Install Oracle Database 19c pada Linux 9 (RHEL9, Centos9, OL9)",
    description: "Langkah mudah memahami cara menginstall Oracle Database 19 pada Linux 9 (RHEL9, Centos9, OL9) beserta konfigurasi dasar yang diperlukan.",
    author: "Teguh Prasetyo",
    slug: "install-oracle-19c-linux-9",
    coverImage: coverImage,
    publishedAt: "2025-07-04",
    content: [
        {
            type: "paragraph",
            text: "Panduan lengkap langkah-langkah instalasi Oracle Database 19c pada sistem operasi Linux versi 9, mencakup Red Hat Enterprise Linux 7, CentOS 7, dan Oracle Linux 7. Artikel ini juga menyertakan praktik terbaik dalam konfigurasi sistem dan database untuk memastikan instalasi berjalan optimal dan siap digunakan di lingkungan produksi."
        },
        // {
        //     type: "quote",
        //     quote: "Artikel ini tidak membahas proses instalasi sistem operasi. Jika Anda ingin mengetahui cara menginstal sistem operasi Linux, silakan lihat panduannya di sini."
        // },
        {
            type: "quote",
            quote: "Download Oracle Database 19c di",
            link: "https://www.oracle.com/id/database/technologies/oracle19c-linux-downloads.html"
        },
        {
            type: "quote",
            quote: "Download OPatch 19",
            link: "https://updates.oracle.com/download/6880880.html"
        },
        {
            type: "quote",
            quote: "Download Oracle Patch 19.23",
            link: "https://support.oracle.com/knowledge/Oracle Cloud/2521164_1.html"
        },
        {
            type: "heading3",
            text: "Konfigurasi Local Repository"
        },
        {
            type: "paragraph",
            text: "Membuat Local Repository bisa lihat di ...."
        },
        {
            type: "heading1",
            text: "Konfigurasi Sistem Operasi"
        },
        {
            type: "heading2",
            text: "Otomatis konfigurasi dengan preinstall oracle"
        },
        {
            type: "code",
            lang: "bash",
            code: `
# Download preinstall jika ada internet
curl -o oracle-database-preinstall-19c-1.0-1.el9.x86_64.rpm https://yum.oracle.com/repo/OracleLinux/OL9/appstream/x86_64/getPackage/oracle-database-preinstall-19c-1.0-1.el9.x86_64.rpm

# Install 
yum -y localinstall oracle-database-preinstall-19c-1.0-1.el9.x86_64.rpm
`,
        },
        {
            type: "heading2",
            text: "Manual konfigurasi"
        },
        {
            type: "heading3",
            text: "Konfigurasi Kernel"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi /etc/sysctl.conf

# Tambahkan konfigurasi berikut
fs.file-max = 6815744
kernel.sem = 250 32000 100 128
kernel.shmmni = 4096
kernel.shmall = 1073741824
kernel.shmmax = 4398046511104
kernel.panic_on_oops = 1
net.core.rmem_default = 262144
net.core.rmem_max = 4194304
net.core.wmem_default = 262144
net.core.wmem_max = 1048576
net.ipv4.conf.all.rp_filter = 2
net.ipv4.conf.default.rp_filter = 2
fs.aio-max-nr = 1048576
net.ipv4.ip_local_port_range = 9000 65500
`,
        },
        {
            type: "heading3",
            text: "Jalankan ini saat ada perubahan pada sysctl.conf"
        },
        {
            type: "code",
            lang: "bash",
            code: `
/sbin/sysctl -p
`,
        },
        {
            type: "heading3",
            text: "Konfigurasi Security Limits"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi /etc/security/limits.conf

# Tambahkan konfigurasi berikut
oracle   soft   nofile    1024
oracle   hard   nofile    65536
oracle   soft   nproc    16384
oracle   hard   nproc    16384
oracle   soft   stack    10240
oracle   hard   stack    32768
oracle   hard   memlock    134217728
oracle   soft   memlock    134217728
`,
        },
        {
            type: "heading3",
            text: "Install package yang dibutuhkan"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi install_package.sh

# Tambahkan konfigurasi berikut
dnf install -y bc
dnf install -y binutils
dnf install -y compat-openssl11
dnf install -y elfutils-libelf
dnf install -y fontconfig
dnf install -y glibc
dnf install -y glibc-devel
dnf install -y ksh
dnf install -y libaio
dnf install -y libasan
dnf install -y liblsan
dnf install -y libX11
dnf install -y libXau
dnf install -y libXi
dnf install -y libXrender
dnf install -y libXtst
dnf install -y libxcrypt-compat
dnf install -y libgcc
dnf install -y libibverbs
dnf install -y libnsl
dnf install -y librdmacm
dnf install -y libstdc++
dnf install -y libxcb
dnf install -y libvirt-libs
dnf install -y make
dnf install -y policycoreutils
dnf install -y policycoreutils-python-utils
dnf install -y smartmontools
dnf install -y sysstat

dnf install -y glibc-headers
dnf install -y ipmiutil
dnf install -y libnsl2
dnf install -y libnsl2-devel
dnf install -y net-tools
dnf install -y nfs-utils 

# Added by me.
dnf install -y gcc
dnf install -y unixODBC
yum install -y unzip
yum install -y xorg-x11-xauth
yum install -y xterm
yum install -y xorg-x11-utils
`,
        },
        {
            type: "heading3",
            text: "Jalankan Install Package"
        },
        {
            type: "code",
            lang: "bash",
            code: `
# Modifikasi executable script agar bisa dieksekusi
chmod +x install_package.sh
# Jalankan script untuk menginstall package yang dibutuhkan
./install_package.sh
`,
        },
        {
            type: "heading3",
            text: "Buat grup dan user baru"
        },
        {
            type: "code",
            lang: "bash",
            code: `
groupadd -g 54321 oinstall
groupadd -g 54322 dba
groupadd -g 54323 oper
useradd -u 54321 -g oinstall -G dba,oper oracle
passwd oracle
`,
        },
        {
            type: "heading3",
            text: "Konfigurasi SELINUX"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi /etc/selinux/config

# Ubah konfigurasi berikut
SELINUX=permissive

# Dan Jalankan perintah berikut
setenforce Permissive
`,
        },
        {
            type: "heading3",
            text: "Nonaktifkan Firewall"
        },
        {
            type: "code",
            lang: "bash",
            code: `
systemctl stop firewalld
systemctl disable firewalld
`,
        },
        {
            type: "heading3",
            text: "Tambahkan IP Address dan Hostname pada /etc/hosts"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi /etc/hosts


<IP Address>    <hostname>.localdomain   <hostname>
192.168.56.200  ol9-db.localdomain       ol9-db
`,
        },
        {
            type: "heading3",
            text: "Buat direktori untuk software oracle"
        },
        {
            type: "code",
            lang: "bash",
            code: `
mkdir /oracle
chown -R oracle:oinstall /oracle
`,
        },
        {
            type: "heading1",
            text: "Instalasi Oracle Database Software"
        },
        {
            type: "paragraph",
            text: "dengan user oracle"
        },
        {
            type: "heading3",
            text: "Pastikan semua file sudah diupload ke direktori /home/oracle"
        },
        {
            type: "code",
            lang: "bash",
            code: `
$ ls
LINUX.X64_193000_db_home.zip  p36233263_190000_Linux-x86-64.zip  p6880880_190000_Linux-x86-64.zip

`,
        },
        {
            type: "heading3",
            text: "Buat Environment Oracle Database"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi db.env

# Oracle Settings
export TMP=/tmp
export TMPDIR=$TMP

export ORACLE_HOSTNAME=ol9-db
export ORACLE_UNQNAME=cdb1
export ORACLE_SID=cdb1

export ORACLE_BASE=/oracle/product/orabase
export ORACLE_HOME=/oracle/product/19c
export ORA_INVENTORY=/oracle/product/oraInventory

export PATH=/usr/sbin:/usr/local/bin:$PATH
export PATH=$ORACLE_HOME/bin:$ORACLE_HOME/OPatch:$PATH

export LD_LIBRARY_PATH=$ORACLE_HOME/lib:/lib:/usr/lib
export CLASSPATH=$ORACLE_HOME/jlib:$ORACLE_HOME/rdbms/jlib

# Fake Oracle Linux 8
export CV_ASSUME_DISTID=OEL8.6

alias sq="sqlplus / as sysdba"
`,
        },
        {
            type: "heading3",
            text: "Automatis jalankan env"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi .bash_profile

# path lengkap db.env
. /home/oracle/db.env
`,
        },
        {
            type: "heading3",
            text: "Buat direktori untuk Oracle base, home, dan inventory"
        },
        {
            type: "code",
            lang: "bash",
            code: `
mkdir -p /oracle/product/orabase
mkdir -p /oracle/product/19c
mkdir -p /oracle/product/oraInventory
mkdir -p /oracle/patch19-23
`,
        },
        {
            type: "heading3",
            text: "Pastikan environment oracle sudah tersedia"
        },
        {
            type: "code",
            lang: "bash",
            code: `
env | grep ORA

ORACLE_UNQNAME=cdb1
ORACLE_SID=cdb1
ORACLE_BASE=/oracle/product/orabase
ORACLE_HOSTNAME=ol9-db
ORA_INVENTORY=/oracle/product/oraInventory
ORACLE_HOME=/oracle/product/19c
`,
        },
        {
            type: "heading3",
            text: "Jika belum ada environment oracle jalanakan"
        },
        {
            type: "code",
            lang: "bash",
            code: `
. .bash_profile
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
unzip -qq LINUX.X64_193000_db_home.zip -d $ORACLE_HOME
`,
        },
        {
            type: "heading3",
            text: "Ekstak Patch"
        },
        {
            type: "code",
            lang: "bash",
            code: `
unzip -qq p36233263_190000_Linux-x86-64.zip -d /oracle/patch19-23/
`,
        },
        {
            type: "heading3",
            text: "Backup OPatch dan Ekstrak OPatch"
        },
        {
            type: "code",
            lang: "bash",
            code: `
cp -r $ORACLE_HOME/OPatch $ORACLE_HOME/OPatch.bak

unzip -qqo p6880880_190000_Linux-x86-64.zip -d $ORACLE_HOME
`,
        },
        {
            type: "heading3",
            text: "Cek OPatch"
        },
        {
            type: "code",
            lang: "bash",
            code: `
opatch version
`,
        },
        {
            type: "heading3",
            text: "Install Seoftware Oracle database 19c"
        },
        {
            type: "code",
            lang: "bash",
            code: `
cd $ORACLE_HOME
./runInstaller -applyRU /oracle/patch19-23/36233263

Preparing the home to patch...
Applying the patch /oracle/patch19-23/36233263...
Successfully applied the patch.

`,
        },
        {
            type: "image",
            src: image0,
            alt: "-"
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
            type: "code",
            lang: "bash",
            code: `
# Jalankan dengan user root
/oracle/product/oraInventory/orainstRoot.sh
/oracle/product/19c/root.sh
`,
        },
        {
            type: "code",
            lang: "bash",
            code: `
# Output
[root@ol9-db ~]# /oracle/product/oraInventory/orainstRoot.sh
Changing permissions of /oracle/product/oraInventory.
Adding read,write permissions for group.
Removing read,write,execute permissions for world.

Changing groupname of /oracle/product/oraInventory to oinstall.
The execution of the script is complete.
[root@ol9-db ~]# /oracle/product/19c/root.sh
Performing root user operation.

The following environment variables are set as:
    ORACLE_OWNER= oracle
    ORACLE_HOME=  /oracle/product/19c

Enter the full pathname of the local bin directory: [/usr/local/bin]:
   Copying dbhome to /usr/local/bin ...
   Copying oraenv to /usr/local/bin ...
   Copying coraenv to /usr/local/bin ...


Creating /etc/oratab file...
Entries will be added to the /etc/oratab file as needed by
Database Configuration Assistant when a database is created
Finished running generic part of root script.
Now product-specific root actions will be performed.


`,
        },
        {
            type: "image",
            src: image8,
            alt: "-"
        },
        {
            type: "heading3",
            text: "Create new Listener"
        },
        
        {
            type: "code",
            lang: "bash",
            code: `
            netca
            `,
        },
        {
            type: "image",
            src: image9,
            alt: "-"
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
            type: "image",
            src: image14,
            alt: "-"
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
            type: "heading3",
            text: "Buat Database Baru"
        },
        {
            type: "code",
            lang: "bash",
            code: `
            dbca
            `
        },
        {
            type: "image",
            src: image17,
            alt: "-"
        },
        {
            type: "image",
            src: image18,
            alt: "-"
        },
        {
            type: "image",
            src: image19,
            alt: "-"
        },
        {
            type: "image",
            src: image20,
            alt: "-"
        },
        {
            type: "image",
            src: image21,
            alt: "-"
        },
        {
            type: "image",
            src: image22,
            alt: "-"
        },
        {
            type: "image",
            src: image23,
            alt: "-"
        },
        {
            type: "image",
            src: image24,
            alt: "-"
        },
        {
            type: "image",
            src: image25,
            alt: "-"
        },
        {
            type: "image",
            src: image26,
            alt: "-"
        },
        {
            type: "image",
            src: image27,
            alt: "-"
        },
        {
            type: "image",
            src: image28,
            alt: "-"
        },
        {
            type: "image",
            src: image29,
            alt: "-"
        },
        {
            type: "image",
            src: image30,
            alt: "-"
        },
        {
            type: "image",
            src: image31,
            alt: "-"
        },
        {
            type: "image",
            src: image31,
            alt: "-"
        },
        {
            type: "heading3",
            text: "Test Koneksi Database",
        },
        {
            type: "code",
            lang: "bash",
            code: `
[oracle@ol9-db ~]$ sq

SQL*Plus: Release 19.0.0.0.0 - Production on Sun Jun 29 13:15:38 2025
Version 19.23.0.0.0

Copyright (c) 1982, 2023, Oracle.  All rights reserved.


Connected to:
Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production
Version 19.23.0.0.0

SQL> select name, open_mode, database_role from v$database;

NAME      OPEN_MODE            DATABASE_ROLE
--------- -------------------- ----------------
CDB1      READ WRITE           PRIMARY

SQL> exit
Disconnected from Oracle Database 19c Enterprise Edition Release 19.0.0.0.0 - Production
Version 19.23.0.0.0
[oracle@ol9-db ~]$ lsnrctl status

LSNRCTL for Linux: Version 19.0.0.0.0 - Production on 29-JUN-2025 13:15:55

Copyright (c) 1991, 2024, Oracle.  All rights reserved.

Connecting to (DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=ol9-db)(PORT=1521)))
STATUS of the LISTENER
------------------------
Alias                     LISTENER
Version                   TNSLSNR for Linux: Version 19.0.0.0.0 - Production
Start Date                29-JUN-2025 12:34:39
Uptime                    0 days 0 hr. 41 min. 16 sec
Trace Level               off
Security                  ON: Local OS Authentication
SNMP                      OFF
Listener Parameter File   /oracle/product/19c/network/admin/listener.ora
Listener Log File         /oracle/product/orabase/diag/tnslsnr/ol9-db/listener/alert/log.xml
Listening Endpoints Summary...
  (DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=ol9-db.localdomain)(PORT=1521)))
  (DESCRIPTION=(ADDRESS=(PROTOCOL=ipc)(KEY=EXTPROC1521)))
Services Summary...
Service "38b0d28b7da5aa95e063c838a8c0966c" has 1 instance(s).
  Instance "cdb1", status READY, has 1 handler(s) for this service...
Service "86b637b62fdf7a65e053f706e80a27ca" has 1 instance(s).
  Instance "cdb1", status READY, has 1 handler(s) for this service...
Service "cdb1" has 1 instance(s).
  Instance "cdb1", status READY, has 1 handler(s) for this service...
Service "cdb1XDB" has 1 instance(s).
  Instance "cdb1", status READY, has 1 handler(s) for this service...
Service "pdb1" has 1 instance(s).
  Instance "cdb1", status READY, has 1 handler(s) for this service...
The command completed successfully

            `
        },

    ]
}