import "./BroadcastExperience.css";

import { renderBroadcastMetrics } from "./BroadcastMetrics";
import { renderBroadcastPriority } from "./BroadcastPriority";
import { renderBroadcastCoach } from "./BroadcastCoach";
import { renderBroadcastHistory } from "./BroadcastHistory";

export function renderBroadcastExperience(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-broadcast";

  section.append(
    renderBroadcastMetrics(),
    renderBroadcastPriority(),
    renderBroadcastCoach(),
    renderBroadcastHistory()
  );

  return section;

}