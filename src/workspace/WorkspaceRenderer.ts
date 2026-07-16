import { getWorkspace } from "../engine/WorkspaceEngine";

import { renderGrowthCenter } from "./GrowthCenter";
import { renderInboxExperience } from "../experience/Inbox";
import { renderContactsExperience } from "../experience/Contacts";
import { renderSmartPipeline } from "../experience/Pipeline";
import { renderSmartCalendar } from "../experience/Calendar/SmartCalendar";
import { renderBroadcastExperience } from "../experience/Broadcast/BroadcastExperience";
import { renderAutomationExperience } from "../experience/Automations/AutomationExperience";
import { renderFlowExperience } from "../experience/Flows/FlowExperience";
import { renderSettingsExperience } from "../experience/Settings/SettingsExperience";

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
    
    case "broadcasts":
        return renderBroadcastExperience();

    case "automations":
        return renderAutomationExperience();

    case "flows":
        return renderFlowExperience();

    case "settings":
        return renderSettingsExperience();

    default:
        return renderGrowthCenter();

    }

}