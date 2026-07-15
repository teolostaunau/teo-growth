export function renderFlowLibrary(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-flow-library";

  const flows = [

    {
      icon: "👋",
      title: "Bienvenida",
      description: "Recibe automáticamente nuevos contactos.",
      status: "Activo",
      steps: 12
    },

    {
      icon: "🎯",
      title: "Lead Premium",
      description: "Clasifica oportunidades de alto valor.",
      status: "Activo",
      steps: 9
    },

    {
      icon: "📅",
      title: "Agendamiento",
      description: "Programa reuniones automáticamente.",
      status: "Borrador",
      steps: 8
    },

    {
      icon: "🔄",
      title: "Reactivación",
      description: "Recupera clientes inactivos.",
      status: "Activo",
      steps: 15
    }

  ];

  section.innerHTML = `

    <div class="tg-section-header">

      <h3>📚 Flow Library™</h3>

      <a href="#">Ver todos</a>

    </div>

    <div class="tg-flow-library-list">

      ${flows.map(flow => `

        <article class="tg-flow-card">

          <div class="tg-flow-card-icon">

            ${flow.icon}

          </div>

          <div class="tg-flow-card-content">

            <strong>${flow.title}</strong>

            <span>${flow.description}</span>

            <small>${flow.steps} pasos · ${flow.status}</small>

          </div>

        </article>

      `).join("")}

    </div>

  `;

  return section;

}