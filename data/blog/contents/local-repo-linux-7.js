
import coverImage from "../images/local-repo/coverImage-localrepo7.jpg";


export default {
    title: "Konfigurasi Local Repository pada Linux 7 (RHEL7, Centos7, OL7)",
    description: "Langkah mudah konfigurasi Local Repository pada Linux 7",
    author: "Teguh Prasetyo",
    slug: "local-repo-linux-7",
    coverImage: coverImage,
    publishedAt: "2025-07-14",
    content: [
        {
            type: "heading3",
            text: "Cek optical device"
        },
        {
            type: "paragraph",
            text: "Jika optical drive terdeteksi, maka output yang ditampilkan adalah:"
        },
        {
            type: "code",
            lang: "bash",
            code: `
blkid
/dev/sr0: UUID="2021-05-28-10-00-48-00" LABEL="OL-7.9 Server.x86_64" TYPE="iso9660" PTTYPE="dos"
`,
        },
        {
            type: "heading3",
            text: "Mounting optical drive"
        },
        {
            type: "paragraph",
            text: "Mounting optical drive diperlukan untuk menyalin paket instalasi dan menggunakannya sebagai local repository"
        },
        {
            type: "code",
            lang: "bash",
            code: `
mount /dev/sr0 /mnt
`,
        },
        {
            type: "heading3",
            text: "Buat direktory untuk local repository"
        },
        {
            type: "code",
            lang: "bash",
            code: `
mkdir -p /opt/localrepo7
`,
        },
        {
            type: "heading3",
            text: "Salin file package ke direktory localrepo7"
        },
        {
            type: "code",
            lang: "bash",
            code: `
cp -pr /mnt/Packages/* /opt/localrepo7/
`,
        },
        {
            type: "heading3",
            text: "Cek hasil salinan file"
        },
        {
            type: "code",
            lang: "bash",
            code: `
cd /opt/localrepo7/
ls | grep deltarpm && ls | grep createrepo
`,
        },
        {
            type: "heading3",
            text: "Install beberapa package yang dibutuhkan untuk create repo"
        },
        {
            type: "code",
            lang: "bash",
            code: `
rpm -ivh deltarpm-3.6-3.el7.x86_64.rpm
rpm -ivh python-deltarpm-3.6-3.el7.x86_64.rpm
rpm -ivh createrepo-0.9.9-28.el7.noarch.rpm
`,
        },
        {
            type: "heading3",
            text: "Backup repository bawaan yang sudah tidak support untuk linux 7"
        },
        {
            type: "code",
            lang: "bash",
            code: `
mv /etc/yum.repos.d/ /etc/yum.repos.d.ori
`,
        },
        {
            type: "heading3",
            text: "Buat direktory baru"
        },
        {
            type: "code",
            lang: "bash",
            code: `
mkdir /etc/yum.repos.d
`,
        },
        {
            type: "heading3",
            text: "Buat repository"
        },
        {
            type: "code",
            lang: "bash",
            code: `
createrepo '/opt/localrepo7/'
`,
        },
        {
            type: "heading3",
            text: "Ubah konfigurasi yum.conf"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi /etc/yum.conf

# Tambahkan
[base-local]
name=localrepo $releasever - $basearch
failovermethod=priority
baseurl=file:///opt/localrepo7
enabled=1
gpgcheck=0
`,
        },
        {
            type: "heading3",
            text: "Cek repository"
        },
        {
            type: "code",
            lang: "bash",
            code: `
yum clean all
yum repolist
`,
        },

    ]
}