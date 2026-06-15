const PROJECTS = [
  {
    id: "ashanum",
    category: "E-Commerce",
    title: "Ashanum.com",
    subtitle: "E-Commerce Platform",
    description: "Platform e-commerce production mandiri dengan manajemen produk, checkout, pembayaran Midtrans, status pesanan, dashboard admin, VPS Linux, Docker, Nginx, SSL, dan domain sendiri.",
    stack: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Midtrans API", "Docker", "Nginx"],
    features: ["Katalog produk dan kategori", "Detail produk", "Checkout dan status pesanan", "Pembayaran Midtrans", "Dashboard admin"],
    website: "https://ashanum.com",
    images: [
      { src: "assets/images/ashanum/desktop.png", title: "Tampilan Desktop", desc: "Tampilan utama website e-commerce pada perangkat desktop." },
      { src: "assets/images/ashanum/admin.png", title: "Dashboard Admin", desc: "Halaman admin untuk mengelola produk, kategori, pesanan, dan operasional e-commerce." },
      { src: "assets/images/ashanum/kategori.png", title: "Kategori Produk", desc: "Halaman kategori untuk memudahkan pelanggan mencari produk berdasarkan kelompok produk." },
      { src: "assets/images/ashanum/detail produk.png", title: "Detail Produk", desc: "Halaman detail produk berisi gambar, harga, deskripsi, stok, dan aksi pembelian." },
      { src: "assets/images/ashanum/checkout.png", title: "Checkout", desc: "Halaman checkout untuk pengisian data pesanan sebelum pembayaran." },
      { src: "assets/images/ashanum/pembayaran by midtrans.png", title: "Pembayaran Midtrans", desc: "Integrasi pembayaran menggunakan Midtrans untuk menyelesaikan transaksi." },
      { src: "assets/images/ashanum/status pesanan.png", title: "Status Pesanan", desc: "Halaman status pesanan untuk memantau proses transaksi pelanggan." },
      { src: "assets/images/ashanum/mobile.png", title: "Tampilan Mobile", desc: "Tampilan responsive untuk akses melalui perangkat mobile." }
    ]
  },
  {
    id: "quilvian-system",
    category: "Rumah Sakit",
    title: "QuilvianSystem",
    subtitle: "Hospital Management System",
    description: "Platform operasional rumah sakit untuk pendaftaran pasien, rekam medis, rawat jalan, rawat inap, farmasi, kasir, keuangan, dan dashboard manajemen.",
    stack: ["ASP.NET Core 6", "Next.js", "PostgreSQL", "Docker", "GitHub Actions"],
    features: ["Pendaftaran pasien", "Rawat jalan dan rawat inap", "Farmasi dan resep", "Kasir dan keuangan", "Dashboard rumah sakit"],
    website: "https://staging.quilvian-mmchospital.com/",
    images: [
      { src: "assets/images/quilvian-system/login.png", title: "Login", desc: "Halaman login untuk akses pengguna berdasarkan role dan hak akses." },
      { src: "assets/images/quilvian-system/dashboard utama.png", title: "Dashboard Utama", desc: "Dashboard utama untuk melihat ringkasan aktivitas dan data operasional sistem." },
      { src: "assets/images/quilvian-system/rawat jalan.png", title: "Rawat Jalan", desc: "Modul rawat jalan untuk mengelola kunjungan pasien dan pelayanan dokter." },
      { src: "assets/images/quilvian-system/resep.png", title: "Resep", desc: "Modul resep untuk pengelolaan obat pasien dan integrasi farmasi." },
      { src: "assets/images/quilvian-system/kasir.png", title: "Kasir", desc: "Modul kasir untuk proses pembayaran layanan dan transaksi pasien." },
      { src: "assets/images/quilvian-system/dashboard keuangan.png", title: "Dashboard Keuangan", desc: "Dashboard keuangan untuk memantau ringkasan pendapatan dan transaksi." }
    ]
  },
  {
    id: "myklinik-solvus",
    category: "Healthcare",
    title: "MyKlinik & Solvus",
    subtitle: "Clinic & Hospital Management",
    description: "Sistem manajemen klinik dan rumah sakit dengan modul dashboard, pendaftaran, rawat jalan, rawat inap, farmasi, kasir, dan laporan keuangan.",
    stack: ["PHP", "SQL Server", "SVN", "WhatsApp Bot", "SATUSEHAT", "BPJS"],
    features: ["Dashboard klinik", "Pendaftaran pasien", "Rawat jalan dan rawat inap", "Farmasi dan kasir", "Laporan keuangan"],
    website: "https://apps.myklinik.id/",
    images: [
      { src: "assets/images/myklinik-solvus/login (1).png", title: "Login", desc: "Halaman login sistem untuk pengguna internal." },
      { src: "assets/images/myklinik-solvus/dashboard.png", title: "Dashboard", desc: "Dashboard utama untuk monitoring data operasional klinik atau rumah sakit." },
      { src: "assets/images/myklinik-solvus/pendaftaran.png", title: "Pendaftaran", desc: "Modul pendaftaran pasien untuk mencatat data pasien dan kunjungan." },
      { src: "assets/images/myklinik-solvus/rawat jalan.png", title: "Rawat Jalan", desc: "Modul pelayanan rawat jalan untuk proses pemeriksaan pasien." },
      { src: "assets/images/myklinik-solvus/rawat inap.png", title: "Rawat Inap", desc: "Modul rawat inap untuk pengelolaan pasien inap dan ruangan." },
      { src: "assets/images/myklinik-solvus/farmasi.png", title: "Farmasi", desc: "Modul farmasi untuk pengelolaan obat dan transaksi farmasi." },
      { src: "assets/images/myklinik-solvus/kasir.png", title: "Kasir", desc: "Modul kasir untuk proses pembayaran pasien." },
      { src: "assets/images/myklinik-solvus/laporan keuangan.png", title: "Laporan Keuangan", desc: "Laporan keuangan untuk memantau transaksi dan pendapatan." }
    ]
  },
  {
    id: "saloka-park",
    category: "Theme Park",
    title: "SalokaPark v2",
    subtitle: "Theme Park Web System",
    description: "Aplikasi web untuk operasional theme park, mencakup pengembangan frontend, backend, flow user, maintenance, dan integrasi data antar sistem.",
    stack: ["PHP", "Laravel", "MySQL", "Web Application"],
    features: ["Halaman operasional theme park", "Pengembangan frontend dan backend", "Maintenance sistem", "Integrasi data internal"],
    website: "https://salokapark.com/",
    images: [
      { src: "assets/images/saloka-park/home.png", title: "Home", desc: "Tampilan halaman utama sistem SalokaPark untuk kebutuhan operasional dan informasi." }
    ]
  },
  {
    id: "purchasing-system",
    category: "Enterprise",
    title: "Purchasing System",
    subtitle: "End-to-End Procurement",
    description: "Sistem purchasing dari permintaan, approval, pembelian, pengiriman, penerimaan, pemeriksaan, verifikasi invoice, hingga approval melalui WhatsApp Bot.",
    stack: ["ASP.NET Core 6", "SQL Server", "IIS", "WhatsApp Bot"],
    features: ["Permintaan pembelian", "Approval bertingkat", "Purchase order", "Penerimaan barang", "Verifikasi invoice"],
    website: "https://blm-rsmmc.com/",
    images: []
  },
  {
    id: "blood-pressure-app",
    category: "Mobile",
    title: "Blood Pressure Monitoring",
    subtitle: "Android Health App",
    description: "Aplikasi Android untuk pemantauan tekanan darah yang terintegrasi dengan smartwatch Huawei dan ekosistem aplikasi rumah sakit.",
    stack: ["Android Studio", "Huawei Health Kit API", "Healthcare Integration"],
    features: ["Monitoring tekanan darah", "Integrasi smartwatch Huawei", "Riwayat pengukuran", "Integrasi sistem kesehatan"],
    website: null,
    images: []
  },
  {
    id: "gate-entry-system",
    category: "Theme Park",
    title: "Gate Entry System",
    subtitle: "Ticketing & Access Gate",
    description: "Sistem ticketing dan gate entry untuk validasi akses pengunjung, integrasi perangkat gate, kiosk, serta monitoring operasional harian.",
    stack: ["PHP", "Laravel", "MySQL", "Hardware Integration", "Kiosk"],
    features: ["Validasi tiket", "Integrasi gate", "Kiosk", "Monitoring akses"],
    website: null,
    images: []
  },
  {
    id: "pos-inventory-system",
    category: "POS",
    title: "POS & Inventory System",
    subtitle: "Cashier, Kitchen & Stock",
    description: "Sistem kasir dan inventory dengan konfigurasi printer POS berbasis IP TCP/IP untuk kasir dan kitchen, cash drawer, serta pemantauan server.",
    stack: ["PHP", "Laravel", "MySQL", "Printer POS", "TCP/IP", "Inventory"],
    features: ["Kasir", "Kitchen printer", "Cash drawer", "Inventory", "Monitoring server"],
    website: null,
    images: []
  },
  {
    id: "freelance-system-suite",
    category: "Freelance",
    title: "Freelance System Suite",
    subtitle: "Recruitment, Hotel, Agriculture & School",
    description: "Kumpulan aplikasi freelance seperti sistem rekrutmen, hotel, pertanian, surat, pendaftaran sekolah, serta deploy CentOS 7 untuk lingkungan imigrasi.",
    stack: ["Full-Stack Development", "CentOS 7", "Deployment", "Web Apps"],
    features: ["Sistem rekrutmen", "Sistem hotel", "Sistem pertanian", "Sistem surat", "Deployment server"],
    website: null,
    images: []
  }
];

const PLACEHOLDER_THUMBS = {
  "purchasing-system": "assets/images/placeholders/purchasing-system.png",
  "blood-pressure-app": "assets/images/placeholders/blood-pressure-app.png",
  "gate-entry-system": "assets/images/placeholders/gate-entry-system.png",
  "pos-inventory-system": "assets/images/placeholders/pos-inventory-system.png",
  "freelance-system-suite": "assets/images/placeholders/freelance-system-suite.png"
};

let activeProject = null;
let activeImageIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderCards("all");
  document.getElementById("total-count").textContent = PROJECTS.length;

  document.getElementById("project-modal").addEventListener("click", event => {
    if (event.target.id === "project-modal") closeProjectModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeProjectModal();
  });
});

function renderFilters() {
  const container = document.getElementById("filter-pills");
  const categories = ["all", ...new Set(PROJECTS.map(item => item.category))];
  container.innerHTML = categories.map((category, index) => `
    <button class="pill ${index === 0 ? "active" : ""}" type="button" data-filter="${escapeHtml(category)}">
      ${category === "all" ? "Semua" : escapeHtml(category)}
    </button>
  `).join("");

  container.querySelectorAll(".pill").forEach(button => {
    button.addEventListener("click", () => {
      container.querySelectorAll(".pill").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      renderCards(button.dataset.filter);
    });
  });
}

function renderCards(filter) {
  const grid = document.getElementById("gallery-grid");
  const countLabel = document.getElementById("count-label");
  const emptyState = document.getElementById("empty-state");
  const items = filter === "all" ? PROJECTS : PROJECTS.filter(project => project.category === filter);

  grid.innerHTML = items.map(project => {
    const thumb = project.images.length ? project.images[0].src : PLACEHOLDER_THUMBS[project.id];
    const badge = project.images.length ? "" : `<span class="badge-no-image">Summary</span>`;
    return `
      <article class="card" onclick="openProjectModal('${project.id}')">
        <div class="card-img-wrap">
          <img src="${thumb}" alt="${escapeHtml(project.title)}" loading="lazy" />
          ${badge}
        </div>
        <div class="card-body">
          <div class="card-tag">${escapeHtml(project.category)}</div>
          <div class="card-title">${escapeHtml(project.title)}</div>
          <div class="card-desc">${escapeHtml(project.description)}</div>
          ${project.website ? `<div class="card-website">Website: ${escapeHtml(formatWebsite(project.website))}</div>` : `<div class="card-website muted">Website belum tersedia</div>`}
          <span class="card-link">Lihat detail</span>
        </div>
      </article>
    `;
  }).join("");

  countLabel.textContent = `${items.length} aplikasi`;
  emptyState.style.display = items.length ? "none" : "block";
}

function openProjectModal(projectId) {
  activeProject = PROJECTS.find(project => project.id === projectId);
  activeImageIndex = 0;
  if (!activeProject) return;

  const modal = document.getElementById("project-modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  renderModalContent();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function renderModalContent() {
  const content = document.getElementById("modal-content");
  const project = activeProject;
  const hasImages = project.images.length > 0;

  const websiteButton = project.website
    ? `<a class="btn-ghost" href="${project.website}" target="_blank" rel="noopener">Buka Website: ${escapeHtml(formatWebsite(project.website))}</a>`
    : "";

  const imageArea = hasImages ? buildModalImages(project) : `
    <div class="no-detail-images">
      <strong>Dokumentasi visual belum tersedia</strong>
      <p>Project ini tetap ditampilkan sebagai ringkasan pengalaman, fitur utama, dan stack teknologi.</p>
    </div>
  `;

  content.innerHTML = `
    <div class="modal-inner">
      <div class="modal-header">
        <div class="category">${escapeHtml(project.category)}</div>
        <h2>${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.subtitle)}</p>
        <div class="modal-actions">
          <button class="btn-secondary" type="button" onclick="downloadProjectPDF('${project.id}')">Download PDF Project</button>
          ${websiteButton}
        </div>
      </div>

      <div class="modal-grid">
        ${imageArea}
      </div>

      <div class="modal-summary">
        <div class="summary-box">
          <h3>Fitur Utama</h3>
          <ul>${project.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
        </div>
        <div class="summary-box">
          <h3>Stack Teknologi</h3>
          <div class="stack-list">${project.stack.map(item => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        </div>
      </div>
    </div>
  `;
}

function buildModalImages(project) {
  const img = project.images[activeImageIndex] || project.images[0];
  return `
    <div class="main-shot">
      <img src="${img.src}" alt="${escapeHtml(img.title)}" />
      <div class="main-caption">
        <strong>${escapeHtml(img.title)}</strong>
        <p>${escapeHtml(img.desc)}</p>
      </div>
    </div>
    <div class="thumb-grid">
      ${project.images.map((item, index) => `
        <button class="thumb ${index === activeImageIndex ? "active" : ""}" type="button" onclick="selectProjectImage(${index})">
          <img src="${item.src}" alt="${escapeHtml(item.title)}" />
          <span>
            <span class="thumb-title">${escapeHtml(item.title)}</span>
            <span class="thumb-desc">${escapeHtml(item.desc)}</span>
          </span>
        </button>
      `).join("")}
    </div>
  `;
}

function selectProjectImage(index) {
  activeImageIndex = index;
  renderModalContent();
}


async function downloadAllProjectsPDF() {
  const btn = document.getElementById("btn-pdf-all");
  const oldLabel = btn ? btn.textContent : "";
  if (btn) {
    btn.classList.add("pdf-loading");
    btn.textContent = "Menyiapkan PDF...";
  }

  try {
    await generatePortfolioPdf(PROJECTS, "portofolio-aplikasi-ikbal-yuliyanto.pdf", true);
  } catch (error) {
    console.error(error);
    alert("Gagal membuat PDF. Pastikan file gambar sesuai path dan koneksi internet aktif untuk memuat library jsPDF.");
  } finally {
    if (btn) {
      btn.classList.remove("pdf-loading");
      btn.textContent = oldLabel || "Download PDF Semua Aplikasi";
    }
  }
}

async function downloadProjectPDF(projectId) {
  const project = PROJECTS.find(item => item.id === projectId);
  if (!project) return;

  try {
    await generatePortfolioPdf([project], `portfolio-${project.id}.pdf`, false);
  } catch (error) {
    console.error(error);
    alert("Gagal membuat PDF project. Pastikan file gambar sesuai path dan koneksi internet aktif untuk memuat library jsPDF.");
  }
}

async function generatePortfolioPdf(projects, filename, includeCover) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("Library jsPDF belum termuat. Pastikan koneksi internet aktif atau CDN tidak diblokir.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const page = { width: 210, height: 297, margin: 14 };

  if (includeCover) {
    addCoverPage(doc, projects, page);
  } else {
    doc.deletePage(1);
  }

  for (let i = 0; i < projects.length; i++) {
    doc.addPage();
    await addProjectPages(doc, projects[i], includeCover ? i + 1 : null, page);
  }

  doc.save(filename);
}

function addCoverPage(doc, projects, page) {
  let y = 28;
  doc.setFillColor(17, 24, 39);
  doc.rect(0, 0, page.width, 58, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Portofolio Aplikasi", page.margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.text("Ikbal Yuliyanto — Full-Stack / Backend Developer", page.margin, y + 8);

  y = 76;
  doc.setTextColor(17, 24, 39);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Ringkasan", page.margin, y);

  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(75, 85, 99);
  const summary = `Total ${projects.length} aplikasi. Project yang memiliki screenshot ditampilkan lengkap dengan foto dan keterangan. Project tanpa foto tetap dicantumkan sebagai ringkasan pengalaman, fitur utama, stack teknologi, dan website jika tersedia.`;
  y = addWrappedText(doc, summary, page.margin, y, page.width - page.margin * 2, 5);

  y += 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(17, 24, 39);
  doc.text("Daftar Aplikasi", page.margin, y);
  y += 8;

  projects.forEach((project, index) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(17, 24, 39);
    doc.text(`${index + 1}. ${project.title}`, page.margin, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(107, 114, 128);
    doc.text(project.category, page.margin + 82, y);
    y += 7;
  });

  addFooter(doc, page);
}

async function addProjectPages(doc, project, number, page) {
  let y = page.margin;
  const title = number ? `${number}. ${project.title}` : project.title;

  doc.setTextColor(107, 114, 128);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text(String(project.category).toUpperCase(), page.margin, y);

  y += 8;
  doc.setTextColor(17, 24, 39);
  doc.setFontSize(18);
  doc.text(title, page.margin, y);

  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(107, 114, 128);
  doc.text(project.subtitle, page.margin, y);

  y += 9;
  doc.setDrawColor(229, 231, 235);
  doc.line(page.margin, y, page.width - page.margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(55, 65, 81);
  doc.setFontSize(9.5);
  y = addWrappedText(doc, project.description, page.margin, y, page.width - page.margin * 2, 5);

  if (project.website) {
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text("Website", page.margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(37, 99, 235);
    y = addWrappedText(doc, project.website, page.margin, y, page.width - page.margin * 2, 5);
  }

  y += 5;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(17, 24, 39);
  doc.text("Fitur Utama", page.margin, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(55, 65, 81);
  for (const feature of project.features) {
    y = ensurePdfSpace(doc, y, 6, page);
    doc.text(`• ${feature}`, page.margin + 2, y);
    y += 5;
  }

  y += 3;
  y = ensurePdfSpace(doc, y, 14, page);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(17, 24, 39);
  doc.text("Stack Teknologi", page.margin, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(55, 65, 81);
  y = addWrappedText(doc, project.stack.join(" · "), page.margin, y, page.width - page.margin * 2, 5);

  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(17, 24, 39);
  doc.text("Dokumentasi Gambar", page.margin, y);
  y += 7;

  if (!project.images.length) {
    y = ensurePdfSpace(doc, y, 22, page);
    doc.setFillColor(249, 250, 251);
    doc.setDrawColor(209, 213, 219);
    doc.roundedRect(page.margin, y, page.width - page.margin * 2, 22, 3, 3, "FD");
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text("Dokumentasi visual belum tersedia", page.margin + 5, y + 8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(107, 114, 128);
    doc.text("Project ini tetap dicantumkan sebagai ringkasan pengalaman dan fitur utama.", page.margin + 5, y + 15);
    addFooter(doc, page);
    return;
  }

  for (let i = 0; i < project.images.length; i++) {
    const item = project.images[i];
    y = await addImageBlockToPdf(doc, item, i + 1, y, page);
  }

  addFooter(doc, page);
}

async function addImageBlockToPdf(doc, item, number, y, page) {
  const maxWidth = page.width - page.margin * 2;
  const maxHeight = 74;
  const captionHeight = 18;
  const blockPadding = 4;
  const needed = maxHeight + captionHeight + blockPadding + 10;
  y = ensurePdfSpace(doc, y, needed, page);

  const image = await loadImageForPdf(item.src);
  if (!image) {
    doc.setFillColor(249, 250, 251);
    doc.setDrawColor(229, 231, 235);
    doc.roundedRect(page.margin, y, maxWidth, 28, 3, 3, "FD");
    doc.setTextColor(185, 28, 28);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`Gambar tidak ditemukan: ${item.src}`, page.margin + 4, y + 10);
    return y + 34;
  }

  const ratio = image.width / image.height;
  let imgW = maxWidth;
  let imgH = imgW / ratio;
  if (imgH > maxHeight) {
    imgH = maxHeight;
    imgW = imgH * ratio;
  }
  const imgX = page.margin + (maxWidth - imgW) / 2;

  doc.setFillColor(249, 250, 251);
  doc.setDrawColor(229, 231, 235);
  doc.roundedRect(page.margin, y, maxWidth, imgH + captionHeight + blockPadding, 3, 3, "S");

  const imageFormat = getImageFormat(item.src);
  doc.addImage(image, imageFormat, imgX, y + 3, imgW, imgH);

  let cy = y + imgH + 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.2);
  doc.setTextColor(17, 24, 39);
  doc.text(`${number}. ${item.title}`, page.margin + 4, cy);

  cy += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(75, 85, 99);
  const lines = doc.splitTextToSize(item.desc, maxWidth - 8);
  doc.text(lines.slice(0, 2), page.margin + 4, cy);

  return y + imgH + captionHeight + blockPadding + 8;
}

function ensurePdfSpace(doc, y, needed, page) {
  if (y + needed <= page.height - page.margin - 10) return y;
  addFooter(doc, page);
  doc.addPage();
  return page.margin;
}

function addWrappedText(doc, text, x, y, width, lineHeight) {
  const lines = doc.splitTextToSize(String(text ?? ""), width);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

function addFooter(doc, page) {
  const pageNumber = doc.internal.getNumberOfPages();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(156, 163, 175);
  doc.text(`Portofolio Ikbal Yuliyanto · Halaman ${pageNumber}`, page.margin, page.height - 8);
}

function loadImageForPdf(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = encodeURI(src);
  });
}

function getImageFormat(src) {
  const lower = String(src).toLowerCase();
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "JPEG";
  if (lower.endsWith(".webp")) return "WEBP";
  return "PNG";
}

function formatWebsite(url) {
  return String(url ?? "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
