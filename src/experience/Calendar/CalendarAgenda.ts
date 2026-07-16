import { priorityAgenda } from "./CalendarData";

export function renderCalendarAgenda(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-calendar-agenda";

  section.innerHTML = `

    <div class="tg-calendar-intro">
      <h4>
        Hoy tienes tres actividades que pueden generar el mayor impacto en tus resultados.
      </h4>
    </div>

    <div class="tg-calendar-priority">

      ${priorityAgenda
        .map(
          (activity) => `
            <div class="tg-priority-card">

              <strong>${activity.time}</strong>

              <h3>${activity.title}</h3>

              <span>${activity.impact}</span>

            </div>
          `
        )
        .join("")}

    </div>

  `;

  return section;

}