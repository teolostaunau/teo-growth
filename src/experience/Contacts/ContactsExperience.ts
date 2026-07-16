import "./ContactsExperience.css";

export function renderContactsExperience(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-smart-contacts";

  section.innerHTML = `
  

    <div class="tg-inbox-panel">
      <div class="tg-smart-card">
        <p>
        Encontré las relaciones que hoy representan mayor valor para el crecimiento de tu negocio.
        </p>
      </div>

<div class="tg-priority-card">

  <span class="tg-label">
    ⭐ RELACIÓN PRIORITARIA
  </span>

  <div class="tg-priority-content">

    <h3>Juan Lostaunau</h3>

    <div class="tg-amount">
      Cliente desde hace 4 años
    </div>

    <div class="tg-last-contact">
      Último contacto hace 12 días.
    </div>

  </div>

  <div class="tg-priority-footer">

    <div class="tg-probability">
      94 % Nivel de relación
    </div>

    <button class="tg-demo-button">
      Fortalecer relación →
    </button>

  </div>

</div>

      <div class="tg-coach-card">

        <span class="tg-label">
          🧠 Growth Coach™
        </span>

        <h4>
        ¿Por qué fortalecer esta relación?
        </h4>

        <ul>
        <li>Cliente de alto valor.</li>
        <li>Existe confianza construida.</li>
        <li>Puede generar nuevas referencias.</li>
        <li>Hace casi dos semanas que no conversan.</li>
        </ul>
      </div>

      <div class="tg-summary-card">
        <span class="tg-label">
        📊 Resumen de Contactos
        </span>
        <div>
          <strong>248</strong>
          <span>Contactos</span>
        </div>   
        <div>
          <strong>35</strong>
          <span>Clientes activos</span>
        </div>
        <div>
          <strong>17</strong>
          <span>Embajadores</span>
        </div>
      </div>
    </div>
    
    <div class="tg-inbox-list">
      <div class="tg-inbox-search">
        🔍 Buscar contactos...
      </div>

      <div class="tg-inbox-items">
        <div class="tg-chat active">
          <strong>⭐ Juan Lostaunau</strong>
          <span>Cliente desde hace 4 años</span>
        </div>

        <div class="tg-chat">
          <strong>🤝 María Gómez</strong>
          <span>Cliente frecuente</span>
        </div>

        <div class="tg-chat">
          <strong>🏢 Constructora Andina</strong>
          <span>Empresa Estratégica</span>
        </div>

        <div class="tg-chat">
          <strong>💎 Caricias del Alma</strong>
          <span>Aliado Comercial</span>
        </div>

        <div class="tg-chat">
          <strong>👤 José Ramírez</strong>
          <span>Prospecto</span>
        </div>
      </div>
    </div>

  `;

  return section;

}