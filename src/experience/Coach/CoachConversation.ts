import "./CoachConversation.css";

import { DemoEngine } from "../../engine/DemoEngine";

export function CoachConversation(): string {

  const scenario = DemoEngine.current();

return `
  <section class="tg-coach-card">

    <div class="tg-coach-badge">
      🧭 Executive Coach™
    </div>

    <h3 class="tg-coach-title">
      ${scenario.coach.title}
    </h3>

    <p class="tg-coach-message">
      ${scenario.coach.message}
    </p>

    <div class="tg-coach-signature">
      La decisión sigue siendo tuya.
      <br>
      Mi trabajo es ayudarte a verla con mayor claridad.
    </div>

  </section>
`;
}