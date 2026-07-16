import "./BroadcastExperience.css";

import { renderBroadcastMetrics } from "./BroadcastMetrics";
import { renderBroadcastPriority } from "./BroadcastPriority";
import { renderBroadcastCoach } from "./BroadcastCoach";
import { renderBroadcastHistory } from "./BroadcastHistory";

export function renderBroadcastExperience(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-broadcast";

  section.append(
    renderBroadcastMetrics()
  );

  const top = document.createElement("div");

  top.className = "tg-broadcast-top";

  top.append(
    renderBroadcastPriority(),
    renderBroadcastCoach()
  );

  section.append(
    top,
    renderBroadcastHistory()
  );

  return section;

}