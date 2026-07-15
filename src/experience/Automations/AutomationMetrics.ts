export function renderAutomationMetrics(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-automation-metrics";

  const metrics = [

    {
      value: "42",
      label: "Automatizaciones"
    },

    {
      value: "19",
      label: "Activas"
    },

    {
      value: "3,280",
      label: "Acciones hoy"
    },

    {
      value: "97%",
      label: "Éxito"
    }

  ];

  section.innerHTML = metrics
    .map(
      (metric) => `
        <article class="tg-metric-card">

          <strong>${metric.value}</strong>

          <span>${metric.label}</span>

        </article>
      `
    )
    .join("");

  return section;

}