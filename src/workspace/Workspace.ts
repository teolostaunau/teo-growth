import { renderSidebar } from "./Sidebar";
import { renderHeader } from "./Header";
import { renderGrowthCenter } from "./GrowthCenter";
import { renderFooter } from "./Footer";

export function renderWorkspace(): HTMLElement {
  const workspace = document.createElement("div");

  workspace.className = "tg-workspace";

  const main = document.createElement("div");
  main.className = "tg-main";

  main.append(
    renderHeader(),
    renderGrowthCenter(),
    renderFooter()
  );

  workspace.append(
    renderSidebar(),
    main
  );

  return workspace;
}