const PROJECTS = [
  {
    "id": "ashanum",
    "title": "Ashanum.com",
    "subtitle": "E-Commerce Platform",
    "category": "E-Commerce",
    "description": "Platform e-commerce production mandiri dengan pembayaran Midtrans, manajemen produk, pesanan, VPS Linux, Docker, Nginx, SSL, dan domain sendiri.",
    "stack": [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Midtrans API",
      "Docker",
      "Nginx"
    ],
    "features": [
      "Katalog produk dan detail produk",
      "Keranjang dan checkout",
      "Pembayaran Midtrans",
      "Dashboard admin pesanan",
      "Deploy production di VPS"
    ],
    "url": "https://ashanum.com",
    "images": [
      {
        "src": "assets/images/ashanum-homepage.svg",
        "title": "Homepage",
        "caption": "Landing page toko online dengan banner, kategori, dan produk unggulan."
      },
      {
        "src": "assets/images/ashanum-catalog.svg",
        "title": "Katalog Produk",
        "caption": "Halaman daftar produk dengan filter, pencarian, harga, dan stok."
      },
      {
        "src": "assets/images/ashanum-product-detail.svg",
        "title": "Detail Produk",
        "caption": "Halaman detail produk berisi foto, deskripsi, varian, dan tombol tambah keranjang."
      },
      {
        "src": "assets/images/ashanum-checkout.svg",
        "title": "Checkout",
        "caption": "Flow checkout dengan alamat, ringkasan belanja, ongkir, dan pilihan pembayaran."
      },
      {
        "src": "assets/images/ashanum-payment.svg",
        "title": "Pembayaran Midtrans",
        "caption": "Integrasi payment gateway untuk transaksi production."
      },
      {
        "src": "assets/images/ashanum-admin-order.svg",
        "title": "Dashboard Pesanan",
        "caption": "Panel admin untuk memantau pesanan, status pembayaran, dan pengiriman."
      }
    ]
  },
  {
    "id": "quilvian",
    "title": "QuilvianSystem",
    "subtitle": "Hospital Management System",
    "category": "Healthcare",
    "description": "Platform operasional rumah sakit untuk pendaftaran, rekam medis, antrean, kasir, farmasi, accounting, HRD, kiosk, dan integrasi hardware.",
    "stack": [
      "ASP.NET Core 6",
      "Next.js",
      "PostgreSQL",
      "Python",
      "Docker",
      "GitHub Actions"
    ],
    "features": [
      "Pendaftaran pasien",
      "Rekam medis dan SOAP",
      "Farmasi dan kasir",
      "Real-time SignalR",
      "CI/CD dan Docker"
    ],
    "url": "#",
    "images": [
      {
        "src": "assets/images/quilvian-dashboard.svg",
        "title": "Dashboard HMS",
        "caption": "Ringkasan operasional rumah sakit untuk kunjungan, layanan, dan billing."
      },
      {
        "src": "assets/images/quilvian-registration.svg",
        "title": "Pendaftaran Pasien",
        "caption": "Modul pendaftaran pasien dan alur kunjungan."
      },
      {
        "src": "assets/images/quilvian-pharmacy.svg",
        "title": "Farmasi",
        "caption": "Pengelolaan resep, stok obat, dan transaksi farmasi."
      }
    ]
  },
  {
    "id": "purchasing",
    "title": "Purchasing System",
    "subtitle": "End-to-End Procurement",
    "category": "Enterprise",
    "description": "Sistem purchasing dari permintaan, approval, pembelian, pengiriman, penerimaan, verifikasi invoice, hingga approval WhatsApp Bot.",
    "stack": [
      "ASP.NET Core 6",
      "SQL Server",
      "IIS",
      "WhatsApp Bot"
    ],
    "features": [
      "Purchase request",
      "Approval bertingkat",
      "Penerimaan barang",
      "Verifikasi invoice",
      "Notifikasi WhatsApp"
    ],
    "url": "#",
    "images": [
      {
        "src": "assets/images/purchasing-request.svg",
        "title": "Permintaan Pembelian",
        "caption": "Flow permintaan barang dari user internal."
      },
      {
        "src": "assets/images/purchasing-approval.svg",
        "title": "Approval",
        "caption": "Alur approval bertingkat termasuk notifikasi WhatsApp Bot."
      },
      {
        "src": "assets/images/purchasing-invoice.svg",
        "title": "Invoice Verification",
        "caption": "Pemeriksaan penerimaan barang dan verifikasi invoice."
      }
    ]
  },
  {
    "id": "blood-pressure",
    "title": "Blood Pressure App",
    "subtitle": "Android Health App",
    "category": "Mobile",
    "description": "Aplikasi Android untuk pemantauan tekanan darah terintegrasi smartwatch Huawei dan ekosistem aplikasi rumah sakit.",
    "stack": [
      "Android Studio",
      "Huawei Health Kit API",
      "Healthcare Integration"
    ],
    "features": [
      "Monitoring tekanan darah",
      "Riwayat pengukuran",
      "Integrasi smartwatch",
      "Health dashboard"
    ],
    "url": "#",
    "images": [
      {
        "src": "assets/images/blood-pressure-mobile-home.svg",
        "title": "Mobile Dashboard",
        "caption": "Ringkasan hasil pengukuran tekanan darah di Android."
      },
      {
        "src": "assets/images/blood-pressure-history.svg",
        "title": "Riwayat Pengukuran",
        "caption": "Riwayat tekanan darah dan grafik perkembangan pasien."
      },
      {
        "src": "assets/images/blood-pressure-integration.svg",
        "title": "Huawei Integration",
        "caption": "Integrasi dengan Huawei Health Kit dan smartwatch."
      }
    ]
  },
  {
    "id": "myklinik",
    "title": "MyKlinik & Solvus",
    "subtitle": "Clinic & Hospital Management",
    "category": "Healthcare",
    "description": "Sistem manajemen klinik dan rumah sakit dengan printer POS, WhatsApp Bot, SATUSEHAT, dan BPJS.",
    "stack": [
      "PHP",
      "SQL Server",
      "SVN",
      "WhatsApp Bot",
      "SATUSEHAT",
      "BPJS"
    ],
    "features": [
      "Manajemen klinik",
      "Printer POS",
      "WhatsApp Bot",
      "Bridging SATUSEHAT",
      "Bridging BPJS"
    ],
    "url": "#",
    "images": [
      {
        "src": "assets/images/myklinik-clinic.svg",
        "title": "Clinic Management",
        "caption": "Modul klinik untuk pendaftaran, layanan, dan rekam medis."
      },
      {
        "src": "assets/images/myklinik-bpjs.svg",
        "title": "BPJS & SATUSEHAT",
        "caption": "Bridging integrasi BPJS dan SATUSEHAT."
      },
      {
        "src": "assets/images/myklinik-pos-printer.svg",
        "title": "Printer POS",
        "caption": "Integrasi printer POS dan WhatsApp Bot."
      }
    ]
  },
  {
    "id": "saloka",
    "title": "SalokaPark v2",
    "subtitle": "Theme Park Web System",
    "category": "Theme Park",
    "description": "Aplikasi web untuk operasional theme park, frontend, backend, flowchart user, maintenance, dan integrasi data.",
    "stack": [
      "PHP",
      "Laravel",
      "MySQL",
      "Web Application"
    ],
    "features": [
      "Dashboard operasional",
      "Frontend dan backend",
      "Flowchart user",
      "Maintenance sistem"
    ],
    "url": "#",
    "images": [
      {
        "src": "assets/images/saloka-ops.svg",
        "title": "Operational Dashboard",
        "caption": "Dashboard operasional theme park."
      },
      {
        "src": "assets/images/saloka-flow.svg",
        "title": "User Flow",
        "caption": "Flowchart user dan integrasi data antar sistem."
      },
      {
        "src": "assets/images/saloka-maintenance.svg",
        "title": "Maintenance",
        "caption": "Pengembangan dan maintenance sistem web."
      }
    ]
  },
  {
    "id": "gate-entry",
    "title": "Gate Entry System",
    "subtitle": "Ticketing & Access Gate",
    "category": "Ticketing",
    "description": "Sistem ticketing dan gate entry untuk validasi akses pengunjung, integrasi perangkat gate, kiosk, dan monitoring harian.",
    "stack": [
      "PHP",
      "Laravel",
      "MySQL",
      "Hardware Integration",
      "Kiosk"
    ],
    "features": [
      "Validasi tiket",
      "Integrasi gate",
      "Kiosk entry",
      "Monitoring akses"
    ],
    "url": "#",
    "images": [
      {
        "src": "assets/images/gate-entry-ticket.svg",
        "title": "Validasi Tiket",
        "caption": "Validasi tiket pengunjung di pintu masuk."
      },
      {
        "src": "assets/images/gate-entry-gate.svg",
        "title": "Access Gate",
        "caption": "Integrasi perangkat gate dan kiosk."
      },
      {
        "src": "assets/images/gate-entry-monitoring.svg",
        "title": "Monitoring",
        "caption": "Monitoring transaksi dan akses harian."
      }
    ]
  },
  {
    "id": "pos-inventory",
    "title": "POS & Inventory",
    "subtitle": "Cashier, Kitchen & Stock",
    "category": "POS",
    "description": "Sistem kasir dan inventory dengan printer POS berbasis IP TCP/IP untuk kasir dan kitchen, cash drawer, serta stock control.",
    "stack": [
      "PHP",
      "Laravel",
      "MySQL",
      "Printer POS",
      "TCP/IP",
      "Inventory"
    ],
    "features": [
      "Kasir",
      "Kitchen order",
      "Printer TCP/IP",
      "Cash drawer",
      "Manajemen stok"
    ],
    "url": "#",
    "images": [
      {
        "src": "assets/images/pos-inventory-cashier.svg",
        "title": "Kasir",
        "caption": "Transaksi kasir dan pembayaran."
      },
      {
        "src": "assets/images/pos-inventory-kitchen.svg",
        "title": "Kitchen Printer",
        "caption": "Cetak order ke printer kitchen via IP TCP/IP."
      },
      {
        "src": "assets/images/pos-inventory-stock.svg",
        "title": "Inventory",
        "caption": "Pemantauan stok dan pergerakan barang."
      }
    ]
  },
  {
    "id": "freelance-suite",
    "title": "Freelance Suite",
    "subtitle": "Multi Project Web Apps",
    "category": "Freelance",
    "description": "Kumpulan aplikasi freelance seperti sistem rekrutmen, hotel, pertanian, surat, sekolah, dan deployment CentOS 7.",
    "stack": [
      "Full-Stack Development",
      "CentOS 7",
      "Deployment",
      "Web Apps"
    ],
    "features": [
      "Recruitment system",
      "Hotel system",
      "Agriculture app",
      "School registration",
      "Server deployment"
    ],
    "url": "#",
    "images": [
      {
        "src": "assets/images/freelance-suite-recruitment.svg",
        "title": "Recruitment System",
        "caption": "Sistem rekrutmen dan manajemen kandidat."
      },
      {
        "src": "assets/images/freelance-suite-hotel.svg",
        "title": "Hotel System",
        "caption": "Modul pemesanan dan operasional hotel."
      },
      {
        "src": "assets/images/freelance-suite-school.svg",
        "title": "School Registration",
        "caption": "Sistem pendaftaran sekolah dan administrasi."
      }
    ]
  }
];

const pills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.card');
const countLabel = document.getElementById('count-label');
const emptyState = document.getElementById('empty-state');

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const filter = pill.dataset.filter;
    let visible = 0;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.cat === filter;
      card.style.display = match ? 'block' : 'none';
      if (match) visible++;
    });
    countLabel.textContent = visible + ' aplikasi';
    emptyState.style.display = visible === 0 ? 'block' : 'none';
  });
});

const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalKicker = document.getElementById('modal-kicker');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalImage = document.getElementById('modal-image');
const modalImageTitle = document.getElementById('modal-image-title');
const modalImageCaption = document.getElementById('modal-image-caption');
const modalThumbs = document.getElementById('modal-thumbs');
const modalFeatures = document.getElementById('modal-features');
const modalStack = document.getElementById('modal-stack');
const modalOpenLink = document.getElementById('modal-open-link');

function openProject(id) {
  const project = PROJECTS.find(item => item.id === id);
  if (!project) return;

  modalKicker.textContent = project.category;
  modalTitle.textContent = project.title;
  modalSubtitle.textContent = project.description;
  modalFeatures.innerHTML = project.features.map(item => `<li>${item}</li>`).join('');
  modalStack.innerHTML = project.stack.map(item => `<span class="skill-tag">${item}</span>`).join('');

  if (project.url && project.url !== '#') {
    modalOpenLink.href = project.url;
    modalOpenLink.style.display = 'inline-flex';
  } else {
    modalOpenLink.style.display = 'none';
  }

  renderImage(project, 0);
  modal.classList.add('open');
  document.body.classList.add('modal-lock');
}

function renderImage(project, index) {
  const image = project.images[index];
  modalImage.src = image.src;
  modalImage.alt = image.title;
  modalImageTitle.textContent = image.title;
  modalImageCaption.textContent = image.caption;
  modalThumbs.innerHTML = project.images.map((img, i) => `
    <button class="thumb ${i === index ? 'active' : ''}" type="button" data-index="${i}" aria-label="${img.title}">
      <img src="${img.src}" alt="${img.title}">
    </button>
  `).join('');
  modalThumbs.querySelectorAll('.thumb').forEach(btn => {
    btn.addEventListener('click', () => renderImage(project, Number(btn.dataset.index)));
  });
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('modal-lock');
}

cards.forEach(card => card.addEventListener('click', () => openProject(card.dataset.project)));
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

function downloadPDF() {
  window.print();
}
