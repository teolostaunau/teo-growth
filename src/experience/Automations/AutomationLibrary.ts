export function renderAutomationLibrary(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-automation-library";

  section.innerHTML = `
    <div class="tg-section-header">
      <h3>📚 Automation Library™</h3>
      <a href="#">Ver todas</a>
    </div>

    <div class="tg-library-grid">

      <article class="tg-library-card">
        <h4>👋 Bienvenida</h4>
        <p>Envía automáticamente un mensaje al primer contacto.</p>
      </article>

      <article class="tg-library-card">
        <h4>🌙 Fuera de horario</h4>
        <p>Responde cuando el equipo no está disponible.</p>
      </article>

      <article class="tg-library-card">
        <h4>🎯 Lead Premium</h4>
        <p>Asigna automáticamente oportunidades importantes.</p>
      </article>

      <article class="tg-library-card">
        <h4>🔁 Seguimiento</h4>
        <p>Recordatorio automático si el cliente no responde.</p>
      </article>

    </div>

    <div class="tg-library-active">

      <h4>⚡ Automatizaciones activas</h4>

      <ul>

        <li>
          <span>Bienvenida Clientes</span>
          <strong>Activa</strong>
        </li>

        <li>
          <span>Lead Premium</span>
          <strong>Activa</strong>
        </li>

        <li>
          <span>Renovación</span>
          <strong>Activa</strong>
        </li>

      </ul>

    </div>
  `;

  return section;

}