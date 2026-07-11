import "./CoachConversation.css";

import { DemoEngine } from "../../engine/DemoEngine";

export function CoachConversation(): string {

  const scenario = DemoEngine.current();

  return `
    <section class="tg-coach-card">

      <h3>🧠 Coach Recommendation™</h3>

      <p>
        <strong>${scenario.coach.title}</strong>
      </p>

      <p>
        ${scenario.coach.message}
      </p>

    </section>
  `;
}