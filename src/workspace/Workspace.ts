import { renderSidebar } from "./Sidebar";
import { renderHeader } from "./Header";
import { renderCurrentWorkspace } from "./WorkspaceRenderer";
import { renderFooter } from "./Footer";

export function renderWorkspace(): HTMLElement {

  const workspace = document.createElement("div");

  workspace.className = "tg-workspace";

  const main = document.createElement("div");
  main.className = "tg-main";

  const content = document.createElement("main");
  content.className = "tg-workspace-content";

  content.appendChild(
    renderCurrentWorkspace()
  );

  main.append(
    renderHeader(),
    content,
    renderFooter()
  );

  workspace.append(
    renderSidebar(),
    main
  );

  return workspace;

}