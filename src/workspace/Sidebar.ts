export function renderSidebar(): HTMLElement {
  const aside = document.createElement("aside");

  aside.className = "tg-sidebar";

  aside.innerHTML = `
    <div class="tg-logo">
      <span class="tg-logo-mark">T</span>
      <span class="tg-logo-text">Teo Growth™</span>
    </div>

    <nav class="tg-menu">
      <button class="tg-menu-item is-active">🏠 Inicio</button>
      <button class="tg-menu-item">📈 Growth</button>
      <button class="tg-menu-item">👥 Equipo</button>
      <button class="tg-menu-item">💬 Conversaciones</button>
      <button class="tg-menu-item">⚙️ Configuración</button>
    </nav>
  `;

  return aside;
}