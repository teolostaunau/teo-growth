import "./OpportunityExperience.css";

import { DemoEngine } from "../../engine/DemoEngine";

export function OpportunityExperience(): string {

  const scenario = DemoEngine.current();

  return `
    <section class="tg-opportunity-card">

      <h3>🎯 Opportunity Card™</h3>

      <p>
        ${scenario.opportunity.description}
      </p>

      <p class="tg-highlight">
        Probabilidad estimada de recuperación:
        ${scenario.opportunity.probability}
      </p>

    </section>
  `;
}