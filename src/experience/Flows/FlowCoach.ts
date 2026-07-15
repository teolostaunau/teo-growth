export function renderFlowCoach(): HTMLElement {

    const card = document.createElement("section");
    card.className = "tg-flow-coach";

    card.innerHTML = `

        <header class="tg-section-header">

            <h3>🤖 Flow Coach™</h3>

        </header>

        <div class="tg-flow-coach-score">

            <span class="score">74%</span>

            <small>Conversión del flujo</small>

        </div>

        <div class="tg-flow-insights">

            <div class="tg-flow-insight">

                <strong>📈 Tendencia</strong>

                <span>+12% respecto al mes anterior.</span>

            </div>

            <div class="tg-flow-insight">

                <strong>⚠ Punto crítico</strong>

                <span>
                    El mayor abandono ocurre en
                    <b>Menú Principal</b>.
                </span>

            </div>

            <div class="tg-flow-insight">

                <strong>✨ Recomendación</strong>

                <span>
                    Agrega una respuesta rápida para
                    <b>"Solicitar precios"</b>.
                </span>

            </div>

            <div class="tg-flow-insight">

                <strong>🏆 Nivel</strong>

                <span>Excelente desempeño.</span>

            </div>

        </div>

    `;

    return card;

}