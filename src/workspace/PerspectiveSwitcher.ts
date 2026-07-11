import "./PerspectiveSwitcher.css";

import { refreshGrowthCenter } from "./WorkspaceController";
import { DemoEngine } from "../engine/DemoEngine";
import type { DemoRole } from "../engine/types";

export function renderPerspectiveSwitcher(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-perspective-switcher";

  section.innerHTML = `
    <span class="tg-perspective-label">
      Ver experiencia como:
    </span>

    <div class="tg-perspective-options">

      <button class="tg-role active" data-role="owner">
        👔 Dueño
      </button>

      <button class="tg-role" data-role="agent">
        💼 Ejecutivo
      </button>

      <button class="tg-role" data-role="viewer">
        📊 Supervisor
      </button>

      <button class="tg-role" data-role="coach">
        🧠 Coach IA
      </button>

    </div>
  `;

  const buttons = section.querySelectorAll<HTMLButtonElement>(".tg-role");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const role = button.dataset.role as DemoRole;

      // Cambia el escenario activo
      DemoEngine.change(role);

      refreshGrowthCenter();

      console.log("Rol seleccionado:", role);

      // Actualiza el botón activo
      buttons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

    });

  });

  return section;
}