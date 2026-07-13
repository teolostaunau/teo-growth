import "./BusinessSnapshot.css";

import { DemoEngine } from "../../engine/DemoEngine";

export function BusinessSnapshot(): string {

  const scenario = DemoEngine.current();

  const snapshot = scenario.snapshot;

const metrics = snapshot.metrics
    .map(
      (metric) => `
        <div class="tg-metric">

    <div class="tg-metric-value">
        ${metric.value}
    </div>

    <div class="tg-metric-label">
        ${metric.label}
    </div>

    <div class="tg-metric-insight">
        ${metric.insight}
    </div>

        </div>
      `
    )
    .join("");

  return `
    <section class="tg-business-card">
      <h3 class="tg-business-title">
        ${snapshot.title}
      </h3>

      <div class="tg-metrics">
        ${metrics}
      </div>
    </section>
  `;
}