import { weekSchedule } from "./CalendarData";

export function renderCalendarWeek(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-calendar-week";

  section.innerHTML = `

    <div class="tg-week-board">

      ${weekSchedule
        .map(
          (day) => `

            <div class="tg-week-column">

              <div class="tg-week-header">

                <h3>${day.day}</h3>

                <small>${day.focus}</small>

              </div>

              <div class="tg-week-events">

                ${day.events
                  .map(
                    (event) => `

                      <div class="tg-impact-block">

                        <strong>${event.time}</strong>

                        <h4>${event.title}</h4>

                        <span>${event.source}</span>

                      </div>

                    `
                  )
                  .join("")}

              </div>

            </div>

          `
        )
        .join("")}

    </div>

  `;

  return section;

}