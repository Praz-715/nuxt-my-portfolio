const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "~/assets/img/pricing.png";
import imgFeatures from "~/assets/img/features.png";
import imgBlogPosts from "~/assets/img/blog-posts.png";
import imgTestimonials from "~/assets/img/testimonials.png";
import imgTeam from "~/assets/img/team.png";
import imgStat from "~/assets/img/stat.png";
import imgContent from "~/assets/img/content.png";
import imgPagination from "~/assets/img/pagination.png";
import imgAlert from "~/assets/img/alerts.jpg";
import imgPopover from "~/assets/img/popovers.jpg";
import imgModal from "~/assets/img/modals.jpg";
import imgDropdowns from "~/assets/img/dropdowns.jpg";

import imgJSC from "~/assets/img/myproject/jsc.png";
import imgJNE from "~/assets/img/myproject/jne.png";
import imgASKRINDO from "~/assets/img/myproject/askrindo.png";
import imgBSS from "~/assets/img/myproject/bss.png";
import imgBPKD from "~/assets/img/myproject/bpkd.png";
import imgBRI from "~/assets/img/myproject/bri.png";

export default [
  {
    heading: "My Database Project",
    description: "All my projects related to Database software",
    items: [
      {
        image: imgJSC,
        title: "Jakarta Smart City",
        subtitle: "Implementing and Maintaining Oracle Database Solutions 2022 - 2024",
        projectId: "JSC",
        route: "myproject",
        pro: false,
        pekerjaan: {
          id: [
            "Implementasi Oracle Real Application Cluster (RAC) 2 Node on VM",
            "Implementasi database staging untuk Master Data Management (MDM)",
            "Membuat dan mengelola database staging sebagai bagian dari alur MDM untuk integrasi data",
            "Maintenance database meliputi backup, tuning, dan optimalisasi",
            "Mengembangkan dan menguji strategi backup dan recovery untuk memastikan pemulihan data",
            "Melakukan tuning database secara berkala untuk menjaga performa optimal",
            "Memonitor log dan mendeteksi anomali untuk mencegah masalah potensial",
            "Melakukan patching dan update berkala untuk menjaga keamanan dan stabilitas databases"
          ],
          en: [
            "Implementing Oracle Real Application Cluster (RAC) 2-Node on VM",
            "Implementing a staging database for Master Data Management (MDM)",
            "Creating and managing the staging database as part of the MDM data integration flow",
            "Performing database maintenance, including backup, tuning, and optimization",
            "Developing and testing backup and recovery strategies to ensure data restoration",
            "Conducting regular database tuning to maintain optimal performance",
            "Monitoring logs and detecting anomalies to prevent potential issues",
            "Performing regular patching and updates to maintain database security and stability"
          ]
        },
      },
      {
        image: imgJNE,
        title: "JNE",
        subtitle: "Data Center Relocation and End-to-End Database Migration 2024",
        projectId: "JNE",
        route: "myproject",
        pro: false,
        pekerjaan: {
          id: [
            "Membuat Oracle Data Guard (ODG) pada server database di data center lama sebagai primary dan di data center baru sebagai standby (menggunakan endian yang sama)",
            "Memastikan ODG telah sinkron dan tidak ada gap sebelum melakukan switchover",
            "Untuk server database dengan endian berbeda (big endian ke little endian), migrasi dilakukan menggunakan proses export-import Data Pump",
            "Mengatasi ketertinggalan data selama proses Data Pump dengan prosedur dan scheduled job",
            "Setelah memastikan tidak ada ketertinggalan data, melakukan cut-off dan switchover database produksi ke data center baru",
            "Melakukan verifikasi konektivitas dan akses untuk memastikan semua layanan dapat beroperasi normal setelah migrasi",
            "Melaksanakan stress test dan load test untuk menguji performa database di data center baru",
            "Membuat dokumentasi dan laporan pasca-migrasi, termasuk evaluasi proses dan rekomendasi untuk perbaikan di masa mendatang"
          ],
          en: [
            "Creating Oracle Data Guard (ODG) on the database server in the old data center as the primary and in the new data center as the standby (using the same endian format)",
            "Ensuring that ODG is synchronized with no gaps before performing the switchover",
            "For database servers with different endians (big endian to little endian), performing migration using the export-import Data Pump process",
            "Handling data lag during the Data Pump process with procedures and scheduled jobs",
            "After confirming no data lag, performing the cut-off and switchover of the production database to the new data center",
            "Verifying connectivity and access to ensure all services operate normally after the migration",
            "Conducting stress tests and load tests to evaluate the database's performance in the new data center",
            "Preparing post-migration documentation and reports, including process evaluation and recommendations for future improvements",
          ]
        },
      },
      {
        image: imgASKRINDO,
        title: "Asuransi Kredit Indonesia",
        subtitle: "Corrective Actions & Preventive Planning for Database Stability (Nov 2023 – Nov 2024)",
        projectId: "ASKRINDO",
        route: "myproject",
        pro: false,
        pekerjaan: {
          id: [
            "Mengidentifikasi masalah dan anomali pada kinerja database melalui pemantauan log dan laporan rutin",
            "Melaksanakan tindakan korektif untuk menangani gangguan atau kerusakan sistem yang terdeteksi",
            "Melakukan tuning dan optimasi berkala guna menjaga performa dan mencegah bottleneck",
            "Mengembangkan prosedur backup dan recovery untuk memastikan pemulihan cepat tanpa kehilangan data",
            "Menerapkan patch dan update keamanan untuk mengurangi kerentanan dan meningkatkan stabilitas",
            "Menyusun dan menjalankan jadwal pemeliharaan preventif agar risiko kerusakan dapat diminimalkan",
            "Mengadakan audit dan inspeksi berkala untuk memastikan kepatuhan terhadap prosedur operasional",
            "Menyusun laporan dan dokumentasi lengkap terkait tindakan korektif dan preventif sebagai bahan evaluasi dan perbaikan berkelanjutan",
          ],
          en: [
            "Identifying issues and anomalies in database performance through log monitoring and regular reports",
            "Implementing corrective actions to address detected system disruptions or failures",
            "Conducting regular tuning and optimization to maintain performance and prevent bottlenecks",
            "Developing backup and recovery procedures to ensure quick restoration without data loss",
            "Applying security patches and updates to reduce vulnerabilities and enhance stability",
            "Creating and executing preventive maintenance schedules to minimize the risk of future failures",
            "Conducting regular audits and inspections to ensure compliance with operational procedures",
            "Preparing comprehensive reports and documentation on corrective and preventive actions for continuous improvement and evaluation",
          ]
        },
      },
      {
        image: imgBSS,
        title: "Bank Sahabat Sampoerna",
        subtitle: "Optimizing Systems with Database Version Upgrade from 11g to 19c",
        projectId: "BSS",
        route: "myproject",
        pro: false,
        pekerjaan: {
          id: [
            "Melakukan backup penuh database 11g untuk memastikan data aman sebelum proses upgrade",
            "Memverifikasi konsistensi dan integritas data pada backup untuk menghindari kesalahan saat proses migrasi",
            "Menyiapkan lingkungan target di Oracle 19c, termasuk instalasi dan konfigurasi sesuai kebutuhan",
            "Menggunakan metode export-import Data Pump untuk mentransfer data dari database 11g ke 19c",
            "Memastikan kompatibilitas skema dan objek database antara versi 11g dan 19c sebelum dan setelah import",
            "Melakukan uji coba dan validasi pada database 19c untuk memastikan semua layanan berjalan normal",
            "Mengoptimalkan kinerja database 19c dengan tuning dan penyesuaian konfigurasi pasca-upgrade",
            "Menyusun dokumentasi dan laporan akhir tentang proses upgrade dan langkah-langkah optimasi yang diterapkan",
          ],
          en: [
            "Performing a full backup of the 11g database to ensure data safety before starting the upgrade process",
            "Verifying the consistency and integrity of the backup to avoid errors during migration",
            "Preparing the target environment in Oracle 19c, including installation and configuration based on requirements",
            "Using the export-import Data Pump method to transfer data from the 11g database to 19c",
            "Ensuring schema and object compatibility between 11g and 19c before and after the import",
            "Conducting testing and validation on the 19c database to ensure all services function properly",
            "Optimizing the performance of the 19c database through tuning and configuration adjustments post-upgrade",
            "Creating documentation and final reports on the upgrade process and optimization steps applied",
          ]
        },
      },
      {
        image: imgBPKD,
        title: "BPKD DKI Jakarta",
        subtitle: "Continuous Database Support and Maintenance (Nov 2023 – Nov 2024)",
        projectId: "BPKD",
        route: "myproject",
        pro: false,
        pekerjaan: {
          id: [
            "Melakukan monitoring harian untuk mendeteksi anomali dan memastikan ketersediaan serta performa database",
            "Melaksanakan tuning berkala untuk menjaga performa optimal dan mencegah bottleneck",
            "Menyiapkan dan menjalankan backup rutin serta menguji proses recovery untuk memastikan data dapat dipulihkan dengan cepat",
            "Mengelola dan menerapkan patch serta upgrade sesuai jadwal untuk menjaga keamanan dan kompatibilitas sistem",
            "Melakukan pemeliharaan dan sinkronisasi database standby agar selalu siap digunakan sebagai failover",
            "Memastikan replikasi data antara primary dan standby berjalan dengan baik tanpa adanya lag",
            "Menyusun dan memantau jadwal maintenance preventif untuk meminimalkan risiko gangguan di masa mendatang",
            "Menyusun laporan dan dokumentasi bulanan mengenai aktivitas maintenance, upgrade, dan tindakan korektif sebagai bahan evaluasi",
          ],
          en: [
            "Performing daily monitoring to detect anomalies and ensure database availability and performance",
            "Conducting regular tuning to maintain optimal performance and prevent bottlenecks",
            "Scheduling and executing routine backups and testing recovery processes to ensure quick data restoration",
            "Managing and applying patches and upgrades according to the schedule to maintain security and system compatibility",
            "Maintaining and synchronizing the standby database to ensure it is always ready for failover",
            "Ensuring data replication between the primary and standby databases operates smoothly with no lag",
            "Developing and monitoring preventive maintenance schedules to minimize the risk of future disruptions",
            "Preparing monthly reports and documentation on maintenance activities, upgrades, and corrective actions for evaluation",
          ]
        },
      },
    ],
  },
  {
    heading: "My Data Project",
    description:
      "All projects related to data, including: data engineering, data visualization, data analysis",
    items: [
      {
        image: imgBRI,
        title: "BRI",
        subtitle: "Anti Money Laundry",
        route: "myproject",
        pro: false,
        projectId: "BRI",
        pekerjaan: {
          id: [
            "Membuat tabel staging pada Hive untuk menampung data mentah dari berbagai sumber sebelum diproses lebih lanjut",
            "Mengembangkan dan menulis script Python untuk mengintegrasikan dan memproses data di Hive menggunakan Spark",
            "Membuat pipeline ETL otomatis yang memindahkan data dari staging ke tabel tujuan sesuai kebutuhan AML",
            "Melakukan pengujian dan debugging script untuk memastikan seluruh proses berjalan lancar dan tanpa error",
            "Memastikan performa optimal dari proses ETL dengan tuning Spark dan penyesuaian konfigurasi",
            "Membuat sistem logging dan monitoring untuk mendokumentasikan aktivitas ETL dan memudahkan pemecahan masalah",
            "Menyusun dokumentasi teknis yang mencakup proses ETL, arsitektur data, dan konfigurasi sistem",
            "Berkolaborasi dengan tim AML dan pemangku kepentingan untuk memastikan data yang diintegrasikan relevan dan sesuai dengan persyaratan regulasi",
          ],
          en: [
            "Creating staging tables in Hive to store raw data from various sources before further processing",
            "Developing and writing Python scripts to integrate and process data in Hive using Spark",
            "Building automated ETL pipelines to transfer data from staging to target tables according to AML requirements",
            "Testing and debugging scripts to ensure smooth execution without errors",
            "Optimizing ETL performance by tuning Spark and adjusting configurations",
            "Implementing logging and monitoring systems to document ETL activities and facilitate troubleshooting",
            "Preparing technical documentation covering ETL processes, data architecture, and system configurations",
            "Collaborating with AML teams and stakeholders to ensure the integrated data aligns with regulatory requirements",
          ]
        },
      },
    ],
  },
];