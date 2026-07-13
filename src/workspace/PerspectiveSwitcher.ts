import "./PerspectiveSwitcher.css";

import { refreshGrowthCenter } from "./WorkspaceController";
import { DemoEngine } from "../engine/DemoEngine";
import type { Perspective } from "../engine/types";

export function renderPerspectiveSwitcher(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-perspective-switcher";

section.innerHTML = `
  <span class="tg-perspective-label">
    Ver como
  </span>

  <nav class="tg-perspective-options">

    <button class="tg-role active" data-role="owner">
      Dueño
    </button>

    <span class="tg-separator">·</span>

    <button class="tg-role" data-role="executive">
      Ejecutivo
    </button>

    <span class="tg-separator">·</span>

    <button class="tg-role" data-role="viewer">
      Supervisor
    </button>

  </nav>
`;

  const buttons = section.querySelectorAll<HTMLButtonElement>(".tg-role");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const perspective = button.dataset.role as Perspective;

      // Cambia el escenario activo
      DemoEngine.change(perspective);

      refreshGrowthCenter();

      console.log("Rol seleccionado:", perspective);

      // Actualiza el botón activo
      buttons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

    });

  });

  return section;
}