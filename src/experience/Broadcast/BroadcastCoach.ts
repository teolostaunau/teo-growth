export function renderBroadcastCoach(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-broadcast-coach";

  section.innerHTML = `
    <div class="tg-coach-card">

      <h3>🧠 Growth Coach™</h3>

      <p>
        Tus campañas muestran una excelente tasa de entrega
        (<strong>96%</strong>), pero la apertura promedio aún puede crecer.
        Considera programar la campaña
        <strong>"Lanzamiento Ebook"</strong>
        entre las 10:00 y las 11:30, horario donde tu audiencia responde mejor.

        <br><br>

        También es recomendable enviar la campaña de
        <strong>Reactívación Clientes</strong>
        después de la mentoría del miércoles para aprovechar el mayor nivel
        de interacción generado durante la semana.
      </p>

    </div>
  `;

  return section;

}