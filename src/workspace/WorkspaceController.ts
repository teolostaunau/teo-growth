import { renderGrowthCenter } from "./GrowthCenter";

export function refreshGrowthCenter() {

  const current = document.querySelector(".tg-growth-center");

  if (!current) return;

  const updated = renderGrowthCenter();

  current.replaceWith(updated);

}