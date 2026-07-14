import { pipelineMetrics } from "./PipelineData";

export function renderPipelineMetrics(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-pipeline-metrics";

  section.innerHTML = pipelineMetrics
    .map(
      (metric) => `
        <div class="tg-metric-card">

          <strong>${metric.value}</strong>

          <span>${metric.label}</span>

        </div>
      `
    )
    .join("");

  return section;

}