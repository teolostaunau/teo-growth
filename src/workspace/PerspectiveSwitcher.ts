import "./PerspectiveSwitcher.css";

import { refreshWorkspace } from "./WorkspaceController";
import { DemoEngine } from "../engine/DemoEngine";
import type { Perspective } from "../engine/types";
import { currentRole } from "../engine/ExperienceStore";

export function renderPerspectiveSwitcher(): HTMLElement {

  const section = document.createElement("section");
  const currentPerspective = currentRole();

  section.className = "tg-perspective-switcher";

  section.innerHTML = `

    <nav class="tg-perspective-options">

      <button class="tg-role ${currentPerspective === "owner" ? "active" : ""}" data-role="owner">
        Dueño
      </button>

      <span class="tg-separator">·</span>

      <button class="tg-role ${currentPerspective === "executive" ? "active" : ""}" data-role="executive">
        Ejecutivo
      </button>

      <span class="tg-separator">·</span>

      <button class="tg-role ${currentPerspective === "viewer" ? "active" : ""}" data-role="viewer">
        Supervisor
      </button>

    </nav>
  `;

  const buttons = section.querySelectorAll<HTMLButtonElement>(".tg-role");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const perspective = button.dataset.role as Perspective;

      DemoEngine.change(perspective);

      refreshWorkspace();

    });

  });

  return section;
}