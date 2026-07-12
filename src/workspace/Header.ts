import { renderPerspectiveSwitcher } from "./PerspectiveSwitcher";
import growthCenterLogo from "../assets/logos/growth-center.png";

export function renderHeader(): HTMLElement {
  const header = document.createElement("header");

  header.className = "tg-header";

header.innerHTML = `
  <div class="tg-header-left">

    <img
      src="${growthCenterLogo}"
      alt="Growth Center"
      class="tg-growth-logo"
    />

    <div class="tg-header-copy">

      <h1 class="tg-header-title">
        Growth Center™
      </h1>

      <p class="tg-header-subtitle">
        Centro de crecimiento de tu empresa.
      </p>

    </div>

  </div>

  <div class="tg-header-right">

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