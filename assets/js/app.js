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
        "src": "assets/images/ashanum/ashanum-homepage.svg",
        "title": "Homepage",
        "caption": "Landing page toko online dengan banner, kategori, dan produk unggulan."
      },
      {
        "src": "assets/images/ashanum/ashanum-catalog.svg",
        "title": "Katalog Produk",
        "caption": "Halaman daftar produk dengan filter, pencarian, harga, dan stok."
      },
      {
        "src": "assets/images/ashanum/ashanum-product-detail.svg",
        "title": "Detail Produk",
        "caption": "Halaman detail produk berisi foto, deskripsi, varian, dan tombol tambah keranjang."
      },
      {
        "src": "assets/images/ashanum/ashanum-checkout.svg",
        "title": "Checkout",
        "caption": "Flow checkout dengan alamat, ringkasan belanja, ongkir, dan pilihan pembayaran."
      },
      {
        "src": "assets/images/ashanum/ashanum-payment.svg",
        "title": "Pembayaran Midtrans",
        "caption": "Integrasi payment gateway untuk transaksi production."
      },
      {
        "src": "assets/images/ashanum/ashanum-admin-order.svg",
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
        "src": "assets/images/quilvian-system/quilvian-dashboard.svg",
        "title": "Dashboard HMS",
        "caption": "Ringkasan operasional rumah sakit untuk kunjungan, layanan, dan billing."
      },
      {
        "src": "assets/images/quilvian-system/quilvian-registration.svg",
        "title": "Pendaftaran Pasien",
        "caption": "Modul pendaftaran pasien dan alur kunjungan."
      },
      {
        "src": "assets/images/quilvian-system/quilvian-pharmacy.svg",
        "title": "Farmasi",
        "caption": "Pengelolaan resep, stok obat, dan transaksi farmasi."
      },
      {
        "src": "assets/images/quilvian-system/quilvian-billing.svg",
        "title": "Billing & Kasir",
        "caption": "Modul kasir dan billing untuk pembayaran layanan pasien."
      },
      {
        "src": "assets/images/quilvian-system/quilvian-kiosk.svg",
        "title": "Kiosk & Hardware",
        "caption": "Integrasi kiosk, scanner, printer, dan perangkat operasional rumah sakit."
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
        "src": "assets/images/purchasing-system/purchasing-request.svg",
        "title": "Permintaan Pembelian",
        "caption": "Flow permintaan barang dari user internal."
      },
      {
        "src": "assets/images/purchasing-system/purchasing-approval.svg",
        "title": "Approval",
        "caption": "Alur approval bertingkat termasuk notifikasi WhatsApp Bot."
      },
      {
        "src": "assets/images/purchasing-system/purchasing-invoice.svg",
        "title": "Invoice Verification",
        "caption": "Pemeriksaan penerimaan barang dan verifikasi invoice."
      },
      {
        "src": "assets/images/purchasing-system/purchasing-po.svg",
        "title": "Purchase Order",
        "caption": "Pembuatan purchase order berdasarkan request dan approval."
      },
      {
        "src": "assets/images/purchasing-system/purchasing-delivery.svg",
        "title": "Penerimaan Barang",
        "caption": "Pencatatan pengiriman, penerimaan barang, dan pemeriksaan stok."
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
        "src": "assets/images/blood-pressure-app/blood-pressure-mobile-home.svg",
        "title": "Mobile Dashboard",
        "caption": "Ringkasan hasil pengukuran tekanan darah di Android."
      },
      {
        "src": "assets/images/blood-pressure-app/blood-pressure-history.svg",
        "title": "Riwayat Pengukuran",
        "caption": "Riwayat tekanan darah dan grafik perkembangan pasien."
      },
      {
        "src": "assets/images/blood-pressure-app/blood-pressure-integration.svg",
        "title": "Huawei Integration",
        "caption": "Integrasi dengan Huawei Health Kit dan smartwatch."
      },
      {
        "src": "assets/images/blood-pressure-app/blood-pressure-reminder.svg",
        "title": "Reminder Pemeriksaan",
        "caption": "Pengingat pemeriksaan rutin dan notifikasi kesehatan pasien."
      },
      {
        "src": "assets/images/blood-pressure-app/blood-pressure-report.svg",
        "title": "Laporan Kesehatan",
        "caption": "Laporan ringkas hasil pengukuran untuk pemantauan dokter atau pasien."
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
        "src": "assets/images/myklinik-solvus/myklinik-clinic.svg",
        "title": "Clinic Management",
        "caption": "Modul klinik untuk pendaftaran, layanan, dan rekam medis."
      },
      {
        "src": "assets/images/myklinik-solvus/myklinik-bpjs.svg",
        "title": "BPJS & SATUSEHAT",
        "caption": "Bridging integrasi BPJS dan SATUSEHAT."
      },
      {
        "src": "assets/images/myklinik-solvus/myklinik-pos-printer.svg",
        "title": "Printer POS",
        "caption": "Integrasi printer POS dan WhatsApp Bot."
      },
      {
        "src": "assets/images/myklinik-solvus/myklinik-whatsapp.svg",
        "title": "WhatsApp Bot",
        "caption": "Notifikasi dan komunikasi pasien melalui WhatsApp Bot."
      },
      {
        "src": "assets/images/myklinik-solvus/myklinik-report.svg",
        "title": "Laporan Klinik",
        "caption": "Laporan operasional klinik, kunjungan, layanan, dan transaksi."
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
        "src": "assets/images/saloka-park/saloka-ops.svg",
        "title": "Operational Dashboard",
        "caption": "Dashboard operasional theme park."
      },
      {
        "src": "assets/images/saloka-park/saloka-flow.svg",
        "title": "User Flow",
        "caption": "Flowchart user dan integrasi data antar sistem."
      },
      {
        "src": "assets/images/saloka-park/saloka-maintenance.svg",
        "title": "Maintenance",
        "caption": "Pengembangan dan maintenance sistem web."
      },
      {
        "src": "assets/images/saloka-park/saloka-ticketing.svg",
        "title": "Ticketing Web",
        "caption": "Modul ticketing dan sinkronisasi data operasional theme park."
      },
      {
        "src": "assets/images/saloka-park/saloka-report.svg",
        "title": "Laporan Operasional",
        "caption": "Laporan harian untuk monitoring aktivitas dan transaksi."
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
        "src": "assets/images/gate-entry-system/gate-entry-ticket.svg",
        "title": "Validasi Tiket",
        "caption": "Validasi tiket pengunjung di pintu masuk."
      },
      {
        "src": "assets/images/gate-entry-system/gate-entry-gate.svg",
        "title": "Access Gate",
        "caption": "Integrasi perangkat gate dan kiosk."
      },
      {
        "src": "assets/images/gate-entry-system/gate-entry-monitoring.svg",
        "title": "Monitoring",
        "caption": "Monitoring transaksi dan akses harian."
      },
      {
        "src": "assets/images/gate-entry-system/gate-entry-kiosk.svg",
        "title": "Kiosk Entry",
        "caption": "Kiosk untuk proses scan tiket dan akses masuk pengunjung."
      },
      {
        "src": "assets/images/gate-entry-system/gate-entry-report.svg",
        "title": "Access Report",
        "caption": "Laporan akses harian, jumlah pengunjung, dan status validasi tiket."
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
        "src": "assets/images/pos-inventory-system/pos-inventory-cashier.svg",
        "title": "Kasir",
        "caption": "Transaksi kasir dan pembayaran."
      },
      {
        "src": "assets/images/pos-inventory-system/pos-inventory-kitchen.svg",
        "title": "Kitchen Printer",
        "caption": "Cetak order ke printer kitchen via IP TCP/IP."
      },
      {
        "src": "assets/images/pos-inventory-system/pos-inventory-stock.svg",
        "title": "Inventory",
        "caption": "Pemantauan stok dan pergerakan barang."
      },
      {
        "src": "assets/images/pos-inventory-system/pos-inventory-cashdrawer.svg",
        "title": "Cash Drawer",
        "caption": "Integrasi cash drawer dan printer kasir."
      },
      {
        "src": "assets/images/pos-inventory-system/pos-inventory-report.svg",
        "title": "Laporan Penjualan",
        "caption": "Laporan penjualan, stok, dan rekap transaksi operasional."
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
        "src": "assets/images/freelance-system-suite/freelance-suite-recruitment.svg",
        "title": "Recruitment System",
        "caption": "Sistem rekrutmen dan manajemen kandidat."
      },
      {
        "src": "assets/images/freelance-system-suite/freelance-suite-hotel.svg",
        "title": "Hotel System",
        "caption": "Modul pemesanan dan operasional hotel."
      },
      {
        "src": "assets/images/freelance-system-suite/freelance-suite-school.svg",
        "title": "School Registration",
        "caption": "Sistem pendaftaran sekolah dan administrasi."
      },
      {
        "src": "assets/images/freelance-system-suite/freelance-suite-agriculture.svg",
        "title": "Agriculture App",
        "caption": "Aplikasi pertanian untuk pencatatan data dan monitoring aktivitas."
      },
      {
        "src": "assets/images/freelance-system-suite/freelance-suite-deployment.svg",
        "title": "Server Deployment",
        "caption": "Deployment aplikasi di server Linux/CentOS untuk kebutuhan production."
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
const modalPdfButton = document.getElementById('modal-pdf-button');
const printReport = document.getElementById('print-report');
let currentProjectId = null;

function openProject(id) {
  const project = PROJECTS.find(item => item.id === id);
  if (!project) return;
  currentProjectId = id;

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
modalPdfButton.addEventListener('click', () => downloadProjectPDF(currentProjectId));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

function escapeHTML(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildProjectReport(project) {
  const maxImages = 5;
  const selectedImages = project.images.slice(0, maxImages);
  const stack = project.stack.map(item => `<span class="report-chip">${escapeHTML(item)}</span>`).join('');
  const shots = selectedImages.map((image, index) => `
    <article class="report-shot">
      <img src="${escapeHTML(image.src)}" alt="${escapeHTML(image.title)}">
      <div class="report-shot-body">
        <div class="report-shot-label">Foto ${index + 1}</div>
        <h3 class="report-shot-title">${escapeHTML(image.title)}</h3>
        <p class="report-shot-caption">${escapeHTML(image.caption)}</p>
      </div>
    </article>
  `).join('');

  return `
    <section class="report-page">
      <header class="report-header">
        <div class="report-category">${escapeHTML(project.category)}</div>
        <h1 class="report-title">Judul Aplikasi: ${escapeHTML(project.title)}</h1>
        <p class="report-description">${escapeHTML(project.description)}</p>
        <div class="report-meta">${stack}</div>
        <div class="report-note">PDF ini menampilkan maksimal ${maxImages} foto beserta keterangan agar halaman tetap rapi dan mudah dibaca.</div>
      </header>
      <h2 class="report-section-title">Foto dan Keterangan</h2>
      ${shots}
      <footer class="report-footer">Portofolio Ikbal Yuliyanto - ${escapeHTML(project.title)}</footer>
    </section>
  `;
}

function startPrintReport(html) {
  printReport.innerHTML = html;
  document.body.classList.add('printing-project');

  // Beri waktu sebentar agar gambar lokal selesai dirender sebelum print dialog muncul.
  setTimeout(() => {
    window.print();
    setTimeout(() => document.body.classList.remove('printing-project'), 700);
  }, 250);
}

function downloadProjectPDF(projectId = 'ashanum') {
  const project = PROJECTS.find(item => item.id === projectId) || PROJECTS.find(item => item.id === 'ashanum');
  if (!project) return;
  startPrintReport(buildProjectReport(project));
}

function buildAllProjectsReport() {
  const grouped = PROJECTS.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {});

  const cover = `
    <section class="report-page report-cover-page">
      <header class="report-header">
        <div class="report-category">Portofolio Aplikasi</div>
        <h1 class="report-title">Ikbal Yuliyanto</h1>
        <p class="report-description">Dokumen ini berisi detail semua aplikasi. Setiap aplikasi menampilkan kategori, judul aplikasi, foto dummy, dan keterangan gambar.</p>
        <div class="report-note">Format: kategori aplikasi, judul aplikasi, lalu maksimal 5 foto dan keterangan untuk setiap aplikasi.</div>
      </header>
      <h2 class="report-section-title">Daftar Aplikasi</h2>
      <div class="report-toc">
        ${Object.entries(grouped).map(([category, items]) => `
          <div class="report-toc-group">
            <strong>${escapeHTML(category)}</strong>
            <ul>${items.map(item => `<li>${escapeHTML(item.title)} - ${escapeHTML(item.subtitle)}</li>`).join('')}</ul>
          </div>
        `).join('')}
      </div>
      <footer class="report-footer">Portofolio Ikbal Yuliyanto - Semua aplikasi</footer>
    </section>
  `;

  return cover + PROJECTS.map(project => buildProjectReport(project)).join('');
}

function downloadAllProjectsPDF() {
  startPrintReport(buildAllProjectsReport());
}

// Kompatibilitas dengan tombol lama jika masih dipanggil dari HTML lain.
function downloadPDF() {
  downloadAllProjectsPDF();
}
