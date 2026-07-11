import { renderPerspectiveSwitcher } from "./PerspectiveSwitcher";
import growthCenterLogo from "../assets/logos/growth-center.png";

export function renderHeader(): HTMLElement {
  const header = document.createElement("header");

  header.className = "tg-header";

  header.innerHTML = `
    <div class="tg-header-brand">
        <img
            src="${growthCenterLogo}"
            alt="Growth Center"
            class="tg-growth-logo"
        />
    </div>

    <div class="tg-header-perspective">
        <div id="tg-perspective-container"></div>
    </div>
  `;

    const container = header.querySelector<HTMLElement>(
    "#tg-perspective-container"
    );

    if (container) {
    container.append(renderPerspectiveSwitcher());
    }

  return header;
}