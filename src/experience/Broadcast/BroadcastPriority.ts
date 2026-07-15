export function renderBroadcastPriority(): HTMLElement {
  const section = document.createElement("section");

  section.className = "tg-broadcast-priority";

  section.innerHTML = `
    <div class="tg-priority-card">

      <div class="tg-priority-header">
        <h3>🎯 Campaign Priority™</h3>
        <a href="#">Ver todas</a>
      </div>

      <div class="tg-priority-list">

        <div class="tg-priority-item">
          <div>
            <strong>🔥 Promoción Mentoría SANAR</strong>
            <span>1,240 contactos · Apertura esperada 82%</span>
          </div>
          <small>Hoy</small>
        </div>

        <div class="tg-priority-item">
          <div>
            <strong>⭐ Reactivación Clientes</strong>
            <span>860 contactos · Apertura esperada 71%</span>
          </div>
          <small>Miércoles</small>
        </div>

        <div class="tg-priority-item">
          <div>
            <strong>🚀 Lanzamiento Ebook</strong>
            <span>2,350 contactos · Apertura esperada 88%</span>
          </div>
          <small>Viernes</small>
        </div>

      </div>

    </div>
  `;

  return section;
}