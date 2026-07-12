export function renderSidebar(): HTMLElement {

  const aside = document.createElement("aside");

  aside.className = "tg-sidebar";

  aside.innerHTML = `

    <div class="tg-sidebar-brand">

      <div class="tg-logo">

        <span class="tg-logo-mark">T</span>

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

      <button class="tg-menu-item is-active">
        📈 Growth Center™
      </button>

      <button class="tg-menu-item">
        💬 Inbox
      </button>

      <button class="tg-menu-item">
        👥 Contacts
      </button>

      <button class="tg-menu-item">
        🎯 Pipelines
      </button>

      <button class="tg-menu-item">
        📅 Calendar
      </button>

      <button class="tg-menu-item">
        📣 Broadcasts
      </button>

      <button class="tg-menu-item">
        ⚙ Automations
      </button>

      <button class="tg-menu-item">
        🔀 Flows
      </button>

      <button class="tg-menu-item">
        🛠 Settings
      </button>

    </nav>

    <div class="tg-sidebar-footer">

      Vision Demo

      <span>v0.6</span>

    </div>

  `;

  return aside;

}