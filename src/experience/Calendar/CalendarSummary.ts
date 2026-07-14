export function renderCalendarSummary(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-calendar-summary";

  section.innerHTML = `

    <div class="tg-summary-card">

      <div class="tg-summary-title">

        <h3>Executive Summary™</h3>

      </div>

      <div class="tg-summary-grid">

        <div class="tg-summary-metric">
          <strong>12</strong>
          <span>Reuniones</span>
        </div>

        <div class="tg-summary-metric">
          <strong>7</strong>
          <span>Alto impacto</span>
        </div>

        <div class="tg-summary-metric">
          <strong>2</strong>
          <span>Espacios libres</span>
        </div>

        <div class="tg-summary-metric">
          <strong>93%</strong>
          <span>Tiempo estratégico</span>
        </div>

      </div>

      <div class="tg-next-meetings">

        <span class="tg-next-label">
          Próximas reuniones
        </span>

        <div class="tg-next-list">

          <div class="tg-next-item">
            09:00 · Constructora Andina
          </div>

          <div class="tg-next-item">
            11:30 · Grupo Pacífico
          </div>

          <div class="tg-next-item">
            16:00 · Caricias del Alma
          </div>

        </div>

      </div>

    </div>

  `;

  return section;

}