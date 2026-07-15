export function renderBroadcastMetrics(): HTMLElement {
  const section = document.createElement("section");

  section.className = "tg-broadcast-metrics";

  const metrics = [
    {
      value: "12",
      label: "Campañas"
    },
    {
      value: "8,420",
      label: "Mensajes enviados"
    },
    {
      value: "96%",
      label: "Entregados"
    },
    {
      value: "81%",
      label: "Leídos"
    },
    {
      value: "342",
      label: "Respuestas"
    },
    {
      value: "41",
      label: "Ventas generadas"
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