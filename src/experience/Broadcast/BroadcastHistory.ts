export function renderBroadcastHistory(): HTMLElement {
  const section = document.createElement("section");

  section.className = "tg-broadcast-history";

  section.innerHTML = `
    <div class="tg-broadcast-card">

      <div class="tg-broadcast-section-title">
        📋 <strong>Broadcast History™</strong>
      </div>

      <table class="tg-broadcast-table">

        <thead>
          <tr>
            <th>Campaña</th>
            <th>Plantilla</th>
            <th>Audiencia</th>
            <th>Entregados</th>
            <th>Leídos</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Promoción Mentoría SANAR</td>
            <td>Promoción Julio</td>
            <td>1,240</td>
            <td>96%</td>
            <td>82%</td>
            <td><span class="tg-status success">Enviada</span></td>
          </tr>

          <tr>
            <td>Reactivación Clientes</td>
            <td>Seguimiento</td>
            <td>860</td>
            <td>95%</td>
            <td>71%</td>
            <td><span class="tg-status success">Enviada</span></td>
          </tr>

          <tr>
            <td>Lanzamiento Ebook</td>
            <td>Ebook 2026</td>
            <td>2,350</td>
            <td>98%</td>
            <td>88%</td>
            <td><span class="tg-status scheduled">Programada</span></td>
          </tr>

        </tbody>

      </table>

    </div>
  `;

  return section;
}