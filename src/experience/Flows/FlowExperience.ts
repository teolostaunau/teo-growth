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
            <h1>🌊 Flows™</h1>
            <p>Diseña experiencias inteligentes que acompañan a tus clientes.</p>
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