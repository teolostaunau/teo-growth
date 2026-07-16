import "./SettingsExperience.css";

import { renderSettingsSidebar } from "./SettingsSidebar";
import { renderSettingsCards } from "./SettingsCards";

export function renderSettingsExperience(): HTMLElement {

    const page = document.createElement("section");
    page.className = "tg-settings-page";

    page.innerHTML = ``;

    
    const layout = document.createElement("div");
    layout.className = "tg-settings-layout";

    layout.append(

        renderSettingsSidebar(),

        renderSettingsCards()

    );

    const summary = document.createElement("div");

    summary.className = "tg-settings-summary";

    summary.innerHTML = `

        <div class="tg-avatar">

            C

        </div>

        <div class="tg-settings-user">

            <strong>
                Carlos Quinto
            </strong>

            <p>
                carlos@email.com
            </p>

        </div>

    `;

    page.append(

        summary,

        layout

    );

    return page;

}