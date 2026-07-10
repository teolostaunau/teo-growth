export function renderGrowthCenter(): HTMLElement {
  const section = document.createElement("main");

  section.className = "tg-growth-center";

  section.innerHTML = `
    <section class="tg-hero-card">

      <span class="tg-badge">
        ☕ Morning Briefing
      </span>

      <h2>
        Buenos días, Carlos.
      </h2>

      <p class="tg-hero-message">
        Mientras tomabas tu café, revisé la actividad de tu empresa.
        Hoy encontré una oportunidad que podría generar aproximadamente
        <strong>S/ 18,500</strong> si actuamos antes del viernes.
      </p>

      <button class="tg-primary-action">
        Ver oportunidad
      </button>

    </section>

    <section class="tg-opportunity-card">

      <h3>🎯 Opportunity Card™</h3>

      <p>
        Cinco clientes dejaron conversaciones sin respuesta hace menos de 48 horas.
      </p>

      <p class="tg-highlight">
        Probabilidad estimada de recuperación: 82 %
      </p>

    </section>

    <section class="tg-business-card">

      <h3>📊 Business Snapshot™</h3>

      <div class="tg-metrics">

        <div>

          <strong>126</strong>

          <span>Conversaciones</span>

        </div>

        <div>

          <strong>38</strong>

          <span>Oportunidades</span>

        </div>

        <div>

          <strong>S/ 214K</strong>

          <span>Pipeline</span>

        </div>

      </div>

    </section>

    <section class="tg-coach-card">

      <h3>🧠 Coach Recommendation™</h3>

      <p>
        Hoy conviene que María contacte primero a los clientes del sector construcción.
        Es donde existe la mayor probabilidad de cierre.
      </p>

    </section>
  `;

  return section;
}