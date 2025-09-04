const CONFIG = {
  eventTitle: "Bengkel Kerja Penyelarasan",
  eventSubtitle: "Pertukaran & Penempatan Guru",
  eventScope: "Antara Negeri/Antara Bahagian",
  eventSession: "Sesi September 2025",
  country: "Malaysia",
  dates: "26–29 Ogos 2025",
  suratMaklumanURL: "#",

  contacts: [
    { name: "En. Yazid bin Saupian", phone: "012-960-2242" },
    { name: "En. Nasaruddin bin Nasir", phone: "013-502-4610" }
  ],

  modals: {
    makanan: {
      title: "Pakej Makanan",
      html: `<ul>
        <li>Hari 1: Nasi Ayam</li>
        <li>Hari 2: Nasi Campur</li>
        <li>Hari 3: BBQ</li>
        <li>Hari 4: Packed Lunch</li>
      </ul>`
    },
    pakaian: {
      title: "Kod Pakaian",
      html: `<ul>
        <li>Hari 1: Batik</li>
        <li>Hari 2: Korporat</li>
        <li>Hari 3: Formal</li>
        <li>Hari 4: Sukan</li>
      </ul>`
    },
    bilik: {
      title: "Bilik Bengkel",
      html: `<ul>
        <li>Dewan Al-Farabi: Negeri A–C</li>
        <li>Kenanga: Negeri D–F</li>
        <li>Cempaka: Negeri G–I</li>
      </ul>`
    }
  }
};

const $ = s => document.querySelector(s);

function buildContacts(list) {
  const wrap = $("#contacts");
  list.forEach(info => {
    const card = document.createElement("div");
    card.className = "contact";
    card.innerHTML = `
      <div class="contact-header">
        <div class="avatar">${info.name.split(" ")[1][0]}</div>
        <div>
          <h3>${info.name}</h3>
          <small>${info.phone}</small>
        </div>
      </div>
      <div class="actions">
        <a class="btn btn-green" href="tel:${info.phone.replace(/\\D/g,'')}">📞 Call</a>
        <a class="btn btn-blue" href="https://wa.me/6${info.phone.replace(/\\D/g,'')}" target="_blank">💬 WhatsApp</a>
      </div>
    `;
    wrap.appendChild(card);
  });
}

function setupModals() {
  const modal = $("#modal");
  const title = $("#modalTitle");
  const body = $("#modalBody");
  const close = $("#modalClose");

  document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const data = CONFIG.modals[btn.dataset.modal];
      if (!data) return;
      title.textContent = data.title;
      body.innerHTML = data.html;
      modal.setAttribute("aria-hidden", "false");
    });
  });

  close.addEventListener("click", () => modal.setAttribute("aria-hidden", "true"));
  modal.addEventListener("click", e => { if (e.target === modal) modal.setAttribute("aria-hidden", "true"); });
}

document.addEventListener("DOMContentLoaded", () => {
  buildContacts(CONFIG.contacts);
  setupModals();
  $("#btnSurat").href = CONFIG.suratMaklumanURL;
});
