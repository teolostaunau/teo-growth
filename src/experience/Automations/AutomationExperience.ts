import "./AutomationExperience.css";

import { renderAutomationMetrics } from "./AutomationMetrics";
import { renderAutomationQueue } from "./AutomationQueue";
import { renderAutomationCoach } from "./AutomationCoach";
import { renderAutomationLibrary } from "./AutomationLibrary";

export function renderAutomationExperience(): HTMLElement {

  const page = document.createElement("section");

  page.className = "tg-automation";

  page.innerHTML = `
    <header class="tg-page-header">

    </header>
  `;

  // Fila Queue + Coach
  const overview = document.createElement("div");
  overview.className = "tg-automation-overview";

  overview.append(
    renderAutomationQueue(),
    renderAutomationCoach()
  );

  // Construcción de la página
  page.append(
    renderAutomationMetrics(),
    overview,
    renderAutomationLibrary()
  );

  return page;

}