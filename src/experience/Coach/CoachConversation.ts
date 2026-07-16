import "./CoachConversation.css";
import { DemoEngine } from "../../engine/DemoEngine";

export function CoachConversation(): string {

  const scenario = DemoEngine.current();

  const reasons = scenario.coach.reasons
    .map(reason => `<li>${reason}</li>`)
    .join("");

  return `
    <section class="tg-coach-card">

      <h3 class="tg-coach-title">
        🧠 Mi recomendación para hoy
      </h3>
      
      <h4 class="tg-coach-heading">
        ${scenario.coach.title} ${scenario.coach.summary}
      </h4>

      <ul class="tg-coach-reasons">
        ${reasons}
      </ul>

    </section>
  `;
}