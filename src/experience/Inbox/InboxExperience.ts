import "./InboxExperience.css";

export function renderInboxExperience(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-smart-inbox";

  section.innerHTML = `
  
    <div class="tg-inbox-list">

      <div class="tg-inbox-search">

        🔍 Buscar conversaciones...

      </div>

      <div class="tg-inbox-items">

        <div class="tg-chat active">
          <strong>Constructora Andina</strong>
          <span>Solicitó la propuesta comercial.</span>
        </div>

        <div class="tg-chat">
          <strong>María Gómez</strong>
          <span>Gracias por la información.</span>
        </div>

        <div class="tg-chat">
          <strong>José Lostaunau</strong>
          <span>¿Podemos reunirnos mañana?</span>
        </div>

        <div class="tg-chat">
          <strong>Caricias del Alma</strong>
          <span>Confirmamos el evento.</span>
        </div>

      </div>

    </div>

    <div class="tg-inbox-panel">

      <div class="tg-smart-card">

        <span class="tg-label">

          💬 Smart Inbox™

        </span>

        <h2>

          Buenas noches, Carlos.

        </h2>

        <p>

          Antes de abrir tus conversaciones encontré la que tiene mayor potencial para generar una venta hoy.

        </p>

      </div>

      <div class="tg-priority-card">

      <span class="tg-label">

        🔥 DECISIÓN PRIORITARIA

      </span>

      <h3>

        Constructora Andina

      </h3>

      <p class="tg-amount">

        S/ 18,500 en negociación

      </p>

      <p>

        Cliente esperando propuesta desde hace dos días.

      </p>

      <div class="tg-priority-footer">

        <div class="tg-probability">

          82 % de probabilidad de cierre

        </div>

        <button class="tg-demo-button">

          Continuar conversación →

        </button>

      </div>
      </div>

      <div class="tg-coach-card">

        <span class="tg-label">

          🧠 Growth Coach™

        </span>

        <h4>

        ¿Por qué comenzar por esta conversación?

        </h4>

        <ul>

        <li>Cliente Premium.</li>

        <li>Solicitó una cotización.</li>

        <li>Lleva dos días esperando respuesta.</li>

        <li>Responder hoy aumenta significativamente la probabilidad de cierre.</li>

        </ul>

     </div>

     <div class="tg-summary-card">

        <span class="tg-label">

        📊 Resumen del Inbox

        </span>

        <div class="tg-summary-grid">

        <div>

        <strong>18</strong>

        <span>Conversaciones</span>

        </div>

        <div>

        <strong>5</strong>

        <span>Listas para vender</span>

        </div>

        <div>

        <strong>8</strong>

        <span>Requieren seguimiento</span>

        </div>

      </div>

    </div>

  `;

  return section;

}