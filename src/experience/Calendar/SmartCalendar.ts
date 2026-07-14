import "./SmartCalendar.css";

import { renderCalendarAgenda } from "./CalendarAgenda";
import { renderCalendarWeek } from "./CalendarWeek";
import { renderCalendarCoach } from "./CalendarCoach";
import { renderCalendarSummary } from "./CalendarSummary";

export function renderSmartCalendar(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-smart-calendar";

  section.appendChild(renderCalendarAgenda());

  section.appendChild(renderCalendarWeek());

  section.appendChild(renderCalendarCoach());

  section.appendChild(renderCalendarSummary());

  return section;

}