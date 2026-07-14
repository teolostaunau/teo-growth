import { getWorkspace } from "../engine/WorkspaceEngine";

import { renderGrowthCenter } from "./GrowthCenter";
import { renderInboxExperience } from "../experience/Inbox";
import { renderContactsExperience } from "../experience/Contacts";
import { renderSmartPipeline } from "../experience/Pipeline";
import { renderSmartCalendar } from "../experience/Calendar/SmartCalendar";

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

    case "calendar":
        return renderSmartCalendar();    
        
    default:
        return renderGrowthCenter();

    }

}