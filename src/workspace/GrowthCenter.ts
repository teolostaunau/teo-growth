import { HeroExperience } from "../experience/Hero";
import { OpportunityExperience } from "../experience/Opportunity";
import { BusinessSnapshot } from "../experience/Snapshot";
import { CoachConversation } from "../experience/Coach";

export function renderGrowthCenter(): HTMLElement {

  const section = document.createElement("main");

  section.className = "tg-growth-center";

  section.innerHTML = `
    ${HeroExperience()}

    ${OpportunityExperience()}

    ${BusinessSnapshot()}

    ${CoachConversation()}
  `;

  return section;
}