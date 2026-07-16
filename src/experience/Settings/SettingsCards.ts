export function renderSettingsCards(): HTMLElement {

    const content = document.createElement("section");

    content.className = "tg-settings-content";

    content.innerHTML = `

        <div class="tg-settings-grid">

            <article class="tg-settings-card">

                <h3>👤 Perfil</h3>

                <span class="tg-settings-label">
                    Usuario
                </span>

                <strong class="tg-settings-value">
                    Carlos Quinto
                </strong>

                <p>
                    carlos@email.com
                </p>

            </article>

            <article class="tg-settings-card">

                <h3>💬 WhatsApp</h3>

                <p>Conectado</p>

                <p>+51 999 999 999</p>

                <p>Hace 2 minutos</p>

            </article>

            <article class="tg-settings-card">

                <h3>👥 Equipo</h3>

                <p>3 usuarios</p>

                <p>2 Ejecutivos</p>

                <p>1 Supervisor</p>

            </article>

            <article class="tg-settings-card">

                <h3>🌎 Idioma</h3>

                <p>Español</p>

                <p>Lima (UTC-5)</p>

            </article>

            <article class="tg-settings-card">

                <h3>💰 Moneda</h3>

                <p>USD</p>

                <p>Dólar Americano</p>

            </article>

            <article class="tg-settings-card">

                <h3>⚙ Automatizaciones</h3>

                <p>19 activas</p>

                <p>97 % éxito</p>

                <p>3280 acciones hoy</p>

            </article>

        </div>

    `;

    return content;

}