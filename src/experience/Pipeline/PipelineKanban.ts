import { pipelineStages } from "./PipelineData";

export function renderPipelineKanban(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-pipeline-kanban";

  section.innerHTML = `
    <div class="tg-kanban-board">

      ${pipelineStages
        .map(
          (stage) => `
            <div class="tg-kanban-column">

              <div class="tg-kanban-header">

                <h3>${stage.title}</h3>

                <span>${stage.total} oportunidades</span>

                <strong>${stage.value}</strong>

              </div>

              <div class="tg-kanban-cards">

                ${stage.cards
                  .map(
                    (card) => `
                        <div class="tg-kanban-card">

                        <strong>${card.company}</strong>

                        <p>${card.amount}</p>

                        <div class="tg-kanban-card-footer">

                            <span>${card.owner}</span>

                            <small>${card.probability}%</small>

                        </div>

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