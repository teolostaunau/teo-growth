import { setWorkspace } from "../engine/WorkspaceEngine";
import { refreshWorkspace } from "./WorkspaceController";
import growthCenterLogo from "../assets/logos/growth-center.png";

export function renderSidebar(): HTMLElement {

  const aside = document.createElement("aside");

  aside.className = "tg-sidebar";

  aside.innerHTML = `

    <div class="tg-sidebar-brand">

      <div class="tg-logo">

        <img
          src="${growthCenterLogo}"
          class="tg-logo-image"
          alt="Teo Growth"
        />

        <div>

          <div class="tg-logo-text">
            Teo Growth™
          </div>

          <div class="tg-logo-tagline">
            Intelligent Business Growth
          </div>

        </div>

      </div>

    </div>

    <nav class="tg-menu">

      <button class="tg-menu-item is-active" data-workspace="growth">
        📈 Growth Center™
      </button>

      <button class="tg-menu-item" data-workspace="inbox">
        💬 Smart Inbox™
      </button>

      <button class="tg-menu-item" data-workspace="contacts">
        👥 Contacts
      </button>

      <button class="tg-menu-item" data-workspace="pipelines">
        🎯 Pipelines
      </button>

      <button class="tg-menu-item" data-workspace="calendar">
        📅 Calendar
      </button>

      <button class="tg-menu-item" data-workspace="broadcasts">
        📣 Broadcasts
      </button>

      <button class="tg-menu-item" data-workspace="automations">
        ⚙ Automations
      </button>

      <button class="tg-menu-item" data-workspace="flows">
        🔀 Flows
      </button>

      <button class="tg-menu-item" data-workspace="settings">
        🛠 Settings
      </button>

    </nav>

    <div class="tg-sidebar-footer">

      Vision Demo

      <span>v0.6</span>

    </div>

  `;

const buttons = aside.querySelectorAll<HTMLButtonElement>(".tg-menu-item");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    buttons.forEach((b) => b.classList.remove("is-active"));
    button.classList.add("is-active");

    const workspace = button.dataset.workspace;

    if (!workspace) return;

    setWorkspace(workspace as any);

    refreshWorkspace();

  });

});

  return aside;

}