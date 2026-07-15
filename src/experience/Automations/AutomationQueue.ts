export function renderAutomationQueue(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-automation-queue";

  const automations = [

    {
      icon: "🟢",
      title: "Lead Premium",
      status: "Ejecutándose",
      description: "Asignando ejecutivo comercial.",
      time: "Hace 1 min"
    },

    {
      icon: "🟡",
      title: "Cliente sin respuesta",
      status: "En espera",
      description: "Recordatorio programado para mañana.",
      time: "09:00"
    },

    {
      icon: "🔵",
      title: "Renovación",
      status: "Programada",
      description: "Crear tarea 15 días antes del vencimiento.",
      time: "Viernes"
    }

  ];

  section.innerHTML = `

    <div class="tg-section-header">

      <h3>⚡ Automation Queue™</h3>

      <a href="#">Ver todas</a>

    </div>

    <div class="tg-automation-list">

      ${automations.map(item => `

        <article class="tg-automation-item">

          <div class="tg-automation-icon">
            ${item.icon}
          </div>

          <div class="tg-automation-content">

            <strong>${item.title}</strong>

            <span>${item.description}</span>

          </div>

          <div class="tg-automation-status">

            <strong>${item.status}</strong>

            <span>${item.time}</span>

          </div>

        </article>

      `).join("")}

    </div>

  `;

  return section;

}