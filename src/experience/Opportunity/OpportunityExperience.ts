import "./OpportunityExperience.css";

import { DemoEngine } from "../../engine/DemoEngine";

export function OpportunityExperience(): string {

  const scenario = DemoEngine.current();

  return `
    <section class="tg-opportunity-card">

      <div class="tg-opportunity-badge">
        🎯 DECISIÓN PRIORITARIA
      </div>

      <h1 class="tg-opportunity-title">
        ${scenario.opportunity.title}
      </h1>

      <p class="tg-opportunity-description">
        ${scenario.opportunity.description}
      </p>

<div class="tg-opportunity-footer">

  <p class="tg-opportunity-probability">
    Probabilidad de cierre:
    <strong>${scenario.opportunity.probability}</strong>
  </p>

  <button class="tg-opportunity-button">
    ${scenario.opportunity.action} →
  </button>

</div>

    </section>
  `;
}