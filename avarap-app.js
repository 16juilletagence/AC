/* =========================================================
   AVARAP CONNECT — comportements partagés (prototype statique)
   ========================================================= */

const NAV_ITEMS = [
  { key: "accueil", href: "avarap-index.html", label: "Accueil", icon: "🏠" },
  { key: "annuaire", href: "avarap-annuaire.html", label: "Annuaire", icon: "🔎" },
  { key: "groupes", href: "avarap-groupes.html", label: "Groupes", icon: "👥" },
  { key: "opportunites", href: "avarap-opportunites.html", label: "Opportunités", icon: "💼" },
  { key: "evenements", href: "avarap-evenements.html", label: "Événements", icon: "📅" },
  { key: "messagerie", href: "avarap-messagerie.html", label: "Messagerie", icon: "✉️" }
];

function initials(name) {
  return name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
}

function renderTopbar(activeKey) {
  const root = document.getElementById("topbar-root");
  if (!root) return;
  const navHtml = NAV_ITEMS.map(item => `
    <a href="${item.href}" class="${item.key === activeKey ? "active" : ""}">
      <span>${item.icon}</span><span>${item.label}</span>
    </a>
  `).join("");

  root.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <a href="avarap-index.html" class="brand">
          <span class="brand-mark">AV</span>
          <span>Avarap Connect<small>Réseau des membres &amp; anciens</small></span>
        </a>
        <nav class="topnav">${navHtml}</nav>
        <div class="topbar-actions">
          <button class="icon-btn" title="Notifications">🔔<span class="dot"></span></button>
          <a href="avarap-parametres.html" class="icon-btn" title="Paramètres">⚙️</a>
          <a href="avarap-profil.html?id=${CURRENT_USER.id}" class="avatar" title="${CURRENT_USER.name}">${CURRENT_USER.initials}</a>
        </div>
        <button class="menu-toggle" id="menu-toggle-btn">☰</button>
      </div>
    </div>
  `;

  const toggleBtn = document.getElementById("menu-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const nav = root.querySelector(".topnav");
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
      if (nav.style.display === "flex") {
        nav.style.position = "absolute";
        nav.style.top = "60px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "var(--navy-800)";
        nav.style.flexDirection = "column";
        nav.style.padding = "10px";
        nav.style.zIndex = "50";
      }
    });
  }
}

function attachLikeButtons(scope = document) {
  scope.querySelectorAll("[data-like-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      const countEl = btn.querySelector("[data-like-count]");
      const liked = btn.classList.toggle("liked");
      let count = parseInt(countEl.dataset.likeCount, 10);
      count = liked ? count + 1 : count - 1;
      countEl.dataset.likeCount = count;
      countEl.textContent = count;
      btn.querySelector(".ic").textContent = liked ? "★" : "☆";
    });
  });
}

function initChipFilters(containerSelector, onChange) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip-filter");
    if (!chip) return;
    container.querySelectorAll(".chip-filter").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    onChange(chip.dataset.value);
  });
}

function initSearch(inputSelector, onInput) {
  const input = document.querySelector(inputSelector);
  if (!input) return;
  input.addEventListener("input", () => onInput(input.value.trim().toLowerCase()));
}

function escapeHtml(str) {
  return (str || "").replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[s]));
}
