import "./FlowExperience.css";

import { renderFlowMetrics } from "./FlowMetrics";
import { renderFlowLibrary } from "./FlowLibrary";
import { renderActiveFlow } from "./ActiveFlow";
import { renderFlowCoach } from "./FlowCoach";

export function renderFlowExperience(): HTMLElement {
    const page = document.createElement("section");
    page.className = "tg-flow-page";

    page.innerHTML = `
        <header class="tg-flow-header">

        </header>
    `;

    page.append(
        renderFlowMetrics(),

        (() => {
            const row = document.createElement("div");
            row.className = "tg-flow-main-row";

            row.append(
                renderFlowLibrary(),
                renderActiveFlow(),
                renderFlowCoach()
            );

            return row;
        })(),

    );

    return page;
}