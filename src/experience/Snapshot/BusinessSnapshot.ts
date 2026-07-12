import "./BusinessSnapshot.css";

import { DemoEngine } from "../../engine/DemoEngine";

export function BusinessSnapshot(): string {

  const scenario = DemoEngine.current();

  const metrics = scenario.snapshot
    .map(
      (metric) => `
        <div class="tg-metric">

          <strong>${metric.value}</strong>

          <span class="tg-metric-label">
            ${metric.label}
          </span>

          <p class="tg-metric-insight">
            ${metric.insight}
          </p>

        </div>
      `
    )
    .join("");

  return `
    <section class="tg-business-card">

      <h3>📊 ¿Por qué esta decisión es importante?</h3>

      <div class="tg-metrics">

        ${metrics}

      </div>

    </section>
  `;
}