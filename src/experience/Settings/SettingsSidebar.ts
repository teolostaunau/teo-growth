export function renderSettingsSidebar(): HTMLElement {

    const aside = document.createElement("aside");

    aside.className = "tg-settings-sidebar";

    aside.innerHTML = `

        <div class="tg-settings-group">

            <span class="tg-settings-title">
                CUENTA
            </span>

            <button class="tg-settings-link active">
                👤 Perfil
            </button>

            <button class="tg-settings-link">
                🎨 Apariencia
            </button>

        </div>

        <div class="tg-settings-group">

            <span class="tg-settings-title">
                EMPRESA
            </span>

            <button class="tg-settings-link">
                💬 WhatsApp
            </button>

            <button class="tg-settings-link">
                👥 Equipo
            </button>

            <button class="tg-settings-link">
                🌎 Idioma
            </button>

            <button class="tg-settings-link">
                💰 Moneda
            </button>

            <button class="tg-settings-link">
                ⚙ Automatizaciones
            </button>

        </div>

    `;

    return aside;

}