import { renderCurrentWorkspace } from "./WorkspaceRenderer";
import { renderHeader } from "./Header";

export function refreshWorkspace() {

  const container = document.querySelector<HTMLElement>(
    ".tg-workspace-content"
  );

  if (!container) return;

  const header = document.querySelector<HTMLElement>(
    ".tg-header"
  );

  if (header) {
    header.replaceWith(
      renderHeader()
    );
  }
    
  container.replaceChildren(
    renderCurrentWorkspace()
  );

}