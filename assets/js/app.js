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
      { src: "assets/images/ashanum/admin.png", title: "Dashboard Admin", desc: "Halaman admin untuk mengelola produk, kategori, pesanan, dan operasional e-commerce." },
      { src: "assets/images/ashanum/desktop.png", title: "Tampilan Desktop", desc: "Tampilan utama website e-commerce pada perangkat desktop." },
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
      { src: "assets/images/myklinik-solvus/dashboard.png", title: "Dashboard", desc: "Dashboard utama untuk monitoring data operasional klinik atau rumah sakit." },
      { src: "assets/images/myklinik-solvus/login (1).png", title: "Login", desc: "Halaman login sistem untuk pengguna internal." },
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
  if (typeof html2pdf === "undefined") {
    alert("Library html2pdf belum termuat. Pastikan koneksi internet aktif atau jalankan via localhost.");
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "pdf-wrapper";
  wrapper.innerHTML = `
    <div class="pdf-cover">
      <h1>Portofolio Aplikasi</h1>
      <p>Ikbal Yuliyanto — Full-Stack / Backend Developer</p>
    </div>
  `;

  PROJECTS.forEach((project, index) => {
    wrapper.appendChild(buildPdfProjectSection(project, index + 1));
  });

  document.body.appendChild(wrapper);
  await waitForImages(wrapper);

  html2pdf()
    .set({
      margin: [8, 8, 8, 8],
      filename: "portofolio-aplikasi-ikbal-yuliyanto.pdf",
      image: { type: "jpeg", quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css"], before: ".pdf-project" }
    })
    .from(wrapper)
    .save()
    .then(() => document.body.removeChild(wrapper))
    .catch(error => {
      document.body.removeChild(wrapper);
      console.error(error);
      alert("Gagal membuat PDF. Coba jalankan dengan Live Server/localhost.");
    });
}

async function downloadProjectPDF(projectId) {
  if (typeof html2pdf === "undefined") {
    alert("Library html2pdf belum termuat. Pastikan koneksi internet aktif atau jalankan via localhost.");
    return;
  }

  const project = PROJECTS.find(item => item.id === projectId);
  if (!project) return;

  const wrapper = document.createElement("div");
  wrapper.className = "pdf-wrapper";
  wrapper.appendChild(buildPdfProjectSection(project, null));

  document.body.appendChild(wrapper);
  await waitForImages(wrapper);

  html2pdf()
    .set({
      margin: [8, 8, 8, 8],
      filename: `portfolio-${project.id}.pdf`,
      image: { type: "jpeg", quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css"] }
    })
    .from(wrapper)
    .save()
    .then(() => document.body.removeChild(wrapper))
    .catch(error => {
      document.body.removeChild(wrapper);
      console.error(error);
      alert("Gagal membuat PDF. Coba jalankan dengan Live Server/localhost.");
    });
}

function buildPdfProjectSection(project, number) {
  const section = document.createElement("section");
  section.className = "pdf-project";
  const title = number ? `${number}. ${escapeHtml(project.title)}` : escapeHtml(project.title);

  const imageBlocks = project.images.length
    ? project.images.slice(0, 8).map((img, imgIndex) => `
        <div class="pdf-image-block">
          <img src="${img.src}" alt="${escapeHtml(img.title)}" />
          <div class="pdf-image-caption">
            <strong>${imgIndex + 1}. ${escapeHtml(img.title)}</strong>
            <p>${escapeHtml(img.desc)}</p>
          </div>
        </div>
      `).join("")
    : `
      <div class="pdf-no-image">
        <strong>Dokumentasi visual belum tersedia</strong>
        <p>Project ini tetap dicantumkan sebagai ringkasan pengalaman, fitur utama, dan stack teknologi.</p>
      </div>
    `;

  section.innerHTML = `
    <div class="pdf-project-header">
      <div class="pdf-category">${escapeHtml(project.category)}</div>
      <h2>${title}</h2>
      <p>${escapeHtml(project.subtitle)}</p>
    </div>
    <div class="pdf-description"><p>${escapeHtml(project.description)}</p></div>
    <div class="pdf-meta">
      ${project.website ? `<h3>Website</h3><p>${escapeHtml(project.website)}</p>` : ""}
      <h3>Fitur Utama</h3>
      <ul>${project.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
      <h3>Stack Teknologi</h3>
      <p>${project.stack.map(item => escapeHtml(item)).join(" · ")}</p>
    </div>
    <div class="pdf-images">${imageBlocks}</div>
  `;
  return section;
}

function waitForImages(root) {
  const images = Array.from(root.querySelectorAll("img"));
  return Promise.all(images.map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve;
    });
  }));
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
