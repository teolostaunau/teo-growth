export function renderCalendarCoach(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-calendar-coach";

  section.innerHTML = `

    <div class="tg-coach-card">

      <div class="tg-coach-title">

        <span>🧠</span>

        <h3>Growth Coach™</h3>

      </div>

      <p>

        Esta semana concentras la mayor parte de tu actividad comercial entre
        <strong>lunes y jueves</strong>. Mantén esos espacios protegidos para
        seguimiento y negociación. El <strong>viernes</strong> es el mejor momento
        para revisar indicadores y preparar la siguiente semana.

      </p>

    </div>

  `;

  return section;

}