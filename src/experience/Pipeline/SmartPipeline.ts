import "./SmartPipeline.css";

import { renderPipelineMetrics } from "./PipelineMetrics";
import { renderPipelineKanban } from "./PipelineKanban";

export function renderSmartPipeline(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-smart-pipeline";

  section.appendChild(renderPipelineMetrics());

  section.appendChild(renderPipelineKanban());

  return section;

}