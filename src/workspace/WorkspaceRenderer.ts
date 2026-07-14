import { getWorkspace } from "../engine/WorkspaceEngine";

import { renderGrowthCenter } from "./GrowthCenter";
import { renderInboxExperience } from "../experience/Inbox";
import { renderContactsExperience } from "../experience/Contacts";
import { renderSmartPipeline } from "../experience/Pipeline";

export function renderCurrentWorkspace(): HTMLElement {

    switch (getWorkspace()) {

    case "growth":
        return renderGrowthCenter();

    case "inbox":
        return renderInboxExperience();

    case "contacts":
        return renderContactsExperience();

    case "pipelines":
        return renderSmartPipeline();

    default:
        return renderGrowthCenter();

    }

}