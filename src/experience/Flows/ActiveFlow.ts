export function renderActiveFlow(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-active-flow";

  section.innerHTML = `

    <div class="tg-section-header">

      <h3>🌊 Active Flow™</h3>

      <a href="#">Ver flujo completo</a>

    </div>

    <div class="tg-flow-diagram">

      <div class="tg-flow-node">
        <strong>🚀 Nuevo Lead</strong>
        <span>Se recibe un nuevo contacto</span>
      </div>

      <div class="tg-flow-arrow">↓</div>

      <div class="tg-flow-node">
        <strong>💬 Mensaje de Bienvenida</strong>
        <span>WhatsApp automático</span>
      </div>

      <div class="tg-flow-arrow">↓</div>

      <div class="tg-flow-node">

        <strong>❓ Menú Principal</strong>

        <div class="tg-flow-options">

          <div>📘 Conocer servicios</div>

          <div>📅 Agendar reunión</div>

          <div>👤 Hablar con un asesor</div>

        </div>

      </div>

      <div class="tg-flow-arrow">↓</div>

      <div class="tg-flow-node">

        <strong>🤝 Asignar Ejecutivo</strong>

        <span>Se crea tarea y seguimiento automático.</span>

      </div>

    </div>

  `;

  return section;

}