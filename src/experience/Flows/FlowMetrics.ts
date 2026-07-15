export function renderFlowMetrics(): HTMLElement {
  const wrapper = document.createElement("section");
  wrapper.className = "tg-flow-metrics";

  const metrics = [
    ["18", "Flows"],
    ["9", "Activos"],
    ["2,430", "Conversaciones"],
    ["74%", "Completados"]
  ];

  metrics.forEach(([value, label]) => {
    const card = document.createElement("article");
    card.className = "tg-metric-card";

    card.innerHTML = `
      <strong>${value}</strong>
      <span>${label}</span>
    `;

    wrapper.append(card);
  });

  return wrapper;
}