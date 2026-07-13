import { getWorkspace } from "../engine/WorkspaceEngine";

import { renderGrowthCenter } from "./GrowthCenter";

export function renderCurrentWorkspace(): HTMLElement {

  switch (getWorkspace()) {

    case "growth":
      return renderGrowthCenter();

    default:
      return renderGrowthCenter();

  }

}