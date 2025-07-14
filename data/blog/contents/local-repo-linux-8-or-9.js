
import coverImage from "../images/local-repo/coverImage-localrepo8-9.jpg";


export default {
    title: "Konfigurasi Local Repository pada Linux 8 atau 9 (RHEL8/9, Centos8/9, OL8/9)",
    description: "Langkah mudah konfigurasi Local Repository pada Linux 8 atau 9",
    author: "Teguh Prasetyo",
    slug: "local-repo-linux-8-or-9",
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
/dev/sr0: BLOCK_SIZE="2048" UUID="2024-05-25-09-39-40-00" LABEL="OL-8-10-0-BaseOS-x86_64" TYPE="iso9660" PTUUID="394bad69" PTTYPE="dos"
/dev/sr0: UUID="2025-05-23-17-19-53-00" LABEL="OL-9-6-0-BaseOS-x86_64" TYPE="iso9660" PTUUID="39ff639e" PTTYPE="dos"
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
mkdir -p /opt/localrepo
`,
        },
        {
            type: "heading3",
            text: "Salin file package ke direktory localrepo"
        },
        {
            type: "code",
            lang: "bash",
            code: `
cp -r /mnt/AppStream /opt/localrepo/
cp -r /mnt/BaseOS /opt/localrepo/
`,
        },
        {
            type: "heading3",
            text: "Nonaktifkan subscription-manager (Khusus RHEL)"
        },
        {
            type: "code",
            lang: "bash",
            code: `
vi /etc/yum/pluginconf.d/subscription-manager.conf
cat /etc/yum/pluginconf.d/subscription-manager.conf

[main]enabled=0
# When following option is set to 1, then all repositories defined outside redhat.repo will be disabled# every time subscription-manager plugin is triggered by dnf or yumdisable_system_repos=0
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
vi /etc/yum.repos.d/local.repo
cat /etc/yum.repos.d/local.repo

[LocalRepository-BaseOS]
name=Local Repository Linux - BaseOS
baseurl=file:///opt/localrepo8/BaseOS
gpgcheck=0
enabled=1
[LocalRepository-AppStream]
name=Local Repository Linux - AppStream
baseurl=file:///opt/localrepo8/AppStream
gpgcheck=0
enabled=1
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
        {
            type: "heading3",
            text: "Tambahkan EPEL Repository"
        },
        {
            type: "code",
            lang: "bash",
            code: `
# EPEL 8
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm

# EPEL 9
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
`,
        },

    ]
}