import "./BusinessSnapshot.css";

import { DemoEngine } from "../../engine/DemoEngine";

export function BusinessSnapshot(): string {

  const scenario = DemoEngine.current();

  const metrics = scenario.snapshot
    .map(
      (metric) => `
        <div class="tg-metric">

          <strong>${metric.value}</strong>

          <span>${metric.label}</span>

        </div>
      `
    )
    .join("");

  return `
    <section class="tg-business-card">

      <h3>📊 Business Snapshot™</h3>

      <div class="tg-metrics">

        ${metrics}

      </div>

    </section>
  `;
}