import { renderCurrentWorkspace } from "./WorkspaceRenderer";

export function refreshWorkspace() {

  const container = document.querySelector<HTMLElement>(
    ".tg-workspace-content"
  );

  if (!container) return;

  container.replaceChildren(
    renderCurrentWorkspace()
  );

}