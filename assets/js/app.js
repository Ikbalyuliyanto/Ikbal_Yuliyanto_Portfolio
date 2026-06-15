const PROJECTS = [
  {
    id: "ashanum",
    category: "E-Commerce",
    title: "Ashanum.com",
    subtitle: "E-Commerce Platform",
    description:
      "Platform e-commerce production mandiri dengan manajemen produk, checkout, pembayaran Midtrans, status pesanan, dashboard admin, VPS Linux, Docker, Nginx, SSL, dan domain sendiri.",
    stack: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Midtrans API", "Docker", "Nginx"],
    features: [
      "Katalog produk dan kategori",
      "Detail produk",
      "Checkout dan status pesanan",
      "Pembayaran Midtrans",
      "Dashboard admin"
    ],
    website: "https://ashanum.com",
    images: [
      {
        src: "assets/images/ashanum/admin.png",
        title: "Dashboard Admin",
        desc: "Halaman admin untuk mengelola produk, kategori, pesanan, dan operasional e-commerce."
      },
      {
        src: "assets/images/ashanum/desktop.png",
        title: "Tampilan Desktop",
        desc: "Tampilan utama website e-commerce pada perangkat desktop."
      },
      {
        src: "assets/images/ashanum/kategori.png",
        title: "Kategori Produk",
        desc: "Halaman kategori untuk memudahkan pelanggan mencari produk berdasarkan kelompok produk."
      },
      {
        src: "assets/images/ashanum/detail produk.png",
        title: "Detail Produk",
        desc: "Halaman detail produk berisi gambar, harga, deskripsi, stok, dan aksi pembelian."
      },
      {
        src: "assets/images/ashanum/checkout.png",
        title: "Checkout",
        desc: "Halaman checkout untuk pengisian data pesanan sebelum pembayaran."
      },
      {
        src: "assets/images/ashanum/pembayaran by midtrans.png",
        title: "Pembayaran Midtrans",
        desc: "Integrasi pembayaran menggunakan Midtrans untuk menyelesaikan transaksi."
      },
      {
        src: "assets/images/ashanum/status pesanan.png",
        title: "Status Pesanan",
        desc: "Halaman status pesanan untuk memantau proses transaksi pelanggan."
      },
      {
        src: "assets/images/ashanum/mobile.png",
        title: "Tampilan Mobile",
        desc: "Tampilan responsive untuk akses melalui perangkat mobile."
      }
    ]
  },

  {
    id: "quilvian-system",
    category: "Rumah Sakit",
    title: "QuilvianSystem",
    subtitle: "Hospital Management System",
    description:
      "Platform operasional rumah sakit untuk pendaftaran pasien, rekam medis, rawat jalan, rawat inap, farmasi, kasir, keuangan, dan dashboard manajemen.",
    stack: ["ASP.NET Core 6", "Next.js", "PostgreSQL", "Docker", "GitHub Actions"],
    features: [
      "Pendaftaran pasien",
      "Rawat jalan dan rawat inap",
      "Farmasi dan resep",
      "Kasir dan keuangan",
      "Dashboard rumah sakit"
    ],
    website: "https://staging.quilvian-mmchospital.com/",
    images: [
      {
        src: "assets/images/quilvian-system/login.png",
        title: "Login",
        desc: "Halaman login untuk akses pengguna berdasarkan role dan hak akses."
      },
      {
        src: "assets/images/quilvian-system/dashboard utama.png",
        title: "Dashboard Utama",
        desc: "Dashboard utama untuk melihat ringkasan aktivitas dan data operasional sistem."
      },
      {
        src: "assets/images/quilvian-system/rawat jalan.png",
        title: "Rawat Jalan",
        desc: "Modul rawat jalan untuk mengelola kunjungan pasien dan pelayanan dokter."
      },
      {
        src: "assets/images/quilvian-system/resep.png",
        title: "Resep",
        desc: "Modul resep untuk pengelolaan obat pasien dan integrasi farmasi."
      },
      {
        src: "assets/images/quilvian-system/kasir.png",
        title: "Kasir",
        desc: "Modul kasir untuk proses pembayaran layanan dan transaksi pasien."
      },
      {
        src: "assets/images/quilvian-system/dashboard keuangan.png",
        title: "Dashboard Keuangan",
        desc: "Dashboard keuangan untuk memantau ringkasan pendapatan dan transaksi."
      }
    ]
  },

  {
    id: "myklinik-solvus",
    category: "Healthcare",
    title: "MyKlinik & Solvus",
    subtitle: "Clinic & Hospital Management",
    description:
      "Sistem manajemen klinik dan rumah sakit dengan modul dashboard, pendaftaran, rawat jalan, rawat inap, farmasi, kasir, dan laporan keuangan.",
    stack: ["PHP", "SQL Server", "SVN", "WhatsApp Bot", "SATUSEHAT", "BPJS"],
    features: [
      "Dashboard klinik",
      "Pendaftaran pasien",
      "Rawat jalan dan rawat inap",
      "Farmasi dan kasir",
      "Laporan keuangan"
    ],
    website: "https://apps.myklinik.id/",
    images: [
      {
        src: "assets/images/myklinik-solvus/dashboard.png",
        title: "Dashboard",
        desc: "Dashboard utama untuk monitoring data operasional klinik atau rumah sakit."
      },
      {
        src: "assets/images/myklinik-solvus/login (1).png",
        title: "Login",
        desc: "Halaman login sistem untuk pengguna internal."
      },
      {
        src: "assets/images/myklinik-solvus/pendaftaran.png",
        title: "Pendaftaran",
        desc: "Modul pendaftaran pasien untuk mencatat data pasien dan kunjungan."
      },
      {
        src: "assets/images/myklinik-solvus/rawat jalan.png",
        title: "Rawat Jalan",
        desc: "Modul pelayanan rawat jalan untuk proses pemeriksaan pasien."
      },
      {
        src: "assets/images/myklinik-solvus/rawat inap.png",
        title: "Rawat Inap",
        desc: "Modul rawat inap untuk pengelolaan pasien inap dan ruangan."
      },
      {
        src: "assets/images/myklinik-solvus/farmasi.png",
        title: "Farmasi",
        desc: "Modul farmasi untuk pengelolaan obat dan transaksi farmasi."
      },
      {
        src: "assets/images/myklinik-solvus/kasir.png",
        title: "Kasir",
        desc: "Modul kasir untuk proses pembayaran pasien."
      },
      {
        src: "assets/images/myklinik-solvus/laporan keuangan.png",
        title: "Laporan Keuangan",
        desc: "Laporan keuangan untuk memantau transaksi dan pendapatan."
      }
    ]
  },

  {
    id: "saloka-park",
    category: "Theme Park",
    title: "SalokaPark v2",
    subtitle: "Theme Park Web System",
    description:
      "Aplikasi web untuk operasional theme park, mencakup pengembangan frontend, backend, flow user, maintenance, dan integrasi data antar sistem.",
    stack: ["PHP", "Laravel", "MySQL", "Web Application"],
    features: [
      "Halaman operasional theme park",
      "Pengembangan frontend dan backend",
      "Maintenance sistem",
      "Integrasi data internal"
    ],
    website: "https://salokapark.com/",
    images: [
      {
        src: "assets/images/saloka-park/home.png",
        title: "Home",
        desc: "Tampilan halaman utama sistem SalokaPark untuk kebutuhan operasional dan informasi."
      }
    ]
  },

  {
    id: "purchasing-system",
    category: "Enterprise",
    title: "Purchasing System",
    subtitle: "End-to-End Procurement",
    description:
      "Sistem purchasing dari permintaan, approval, pembelian, pengiriman, penerimaan, pemeriksaan, verifikasi invoice, hingga approval melalui WhatsApp Bot.",
    stack: ["ASP.NET Core 6", "SQL Server", "IIS", "WhatsApp Bot"],
    features: [
      "Permintaan pembelian",
      "Approval bertingkat",
      "Purchase order",
      "Penerimaan barang",
      "Verifikasi invoice"
    ],
    website: "https://blm-rsmmc.com/",
    images: []
  },

  {
    id: "blood-pressure-app",
    category: "Mobile",
    title: "Blood Pressure Monitoring",
    subtitle: "Android Health App",
    description:
      "Aplikasi Android untuk pemantauan tekanan darah yang terintegrasi dengan smartwatch Huawei dan ekosistem aplikasi rumah sakit.",
    stack: ["Android Studio", "Huawei Health Kit API", "Healthcare Integration"],
    features: [
      "Monitoring tekanan darah",
      "Integrasi smartwatch Huawei",
      "Riwayat pengukuran",
      "Integrasi sistem kesehatan"
    ],
    website: null,
    images: []
  },

  {
    id: "gate-entry-system",
    category: "Theme Park",
    title: "Gate Entry System",
    subtitle: "Ticketing & Access Gate",
    description:
      "Sistem ticketing dan gate entry untuk validasi akses pengunjung, integrasi perangkat gate, kiosk, serta monitoring operasional harian.",
    stack: ["PHP", "Laravel", "MySQL", "Hardware Integration", "Kiosk"],
    features: [
      "Validasi tiket",
      "Integrasi gate",
      "Kiosk",
      "Monitoring akses"
    ],
    website: null,
    images: []
  },

  {
    id: "pos-inventory-system",
    category: "POS",
    title: "POS & Inventory System",
    subtitle: "Cashier, Kitchen & Stock",
    description:
      "Sistem kasir dan inventory dengan konfigurasi printer POS berbasis IP TCP/IP untuk kasir dan kitchen, cash drawer, serta pemantauan server.",
    stack: ["PHP", "Laravel", "MySQL", "Printer POS", "TCP/IP", "Inventory"],
    features: [
      "Kasir",
      "Kitchen printer",
      "Cash drawer",
      "Inventory",
      "Monitoring server"
    ],
    website: null,
    images: []
  },

  {
    id: "freelance-system-suite",
    category: "Freelance",
    title: "Freelance System Suite",
    subtitle: "Recruitment, Hotel, Agriculture & School",
    description:
      "Kumpulan aplikasi freelance seperti sistem rekrutmen, hotel, pertanian, surat, pendaftaran sekolah, serta deploy CentOS 7 untuk lingkungan imigrasi.",
    stack: ["Full-Stack Development", "CentOS 7", "Deployment", "Web Apps"],
    features: [
      "Sistem rekrutmen",
      "Sistem hotel",
      "Sistem pertanian",
      "Sistem surat",
      "Deployment server"
    ],
    website: null,
    images: []
  }
];