import "./PerspectiveSwitcher.css";

export function renderPerspectiveSwitcher(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-perspective-switcher";

  section.innerHTML = `
    <span class="tg-perspective-label">
      Ver experiencia como:
    </span>

    <div class="tg-perspective-options">

      <button class="tg-role active" data-role="owner">
        👔 Dueño
      </button>

      <button class="tg-role" data-role="agent">
        💼 Ejecutivo
      </button>

      <button class="tg-role" data-role="viewer">
        📊 Supervisor
      </button>

      <button class="tg-role" data-role="coach">
        🧠 Coach IA
      </button>

    </div>
  `;

  return section;
}