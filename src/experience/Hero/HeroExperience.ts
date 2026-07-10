import "./HeroExperience.css";

import { DemoEngine } from "../../engine/DemoEngine";

export function HeroExperience(): string {
  const scenario = DemoEngine.current();

  return `
    <section class="hero-experience">

      <div class="hero-badge">
        ☀ Morning Briefing
      </div>

      <h1 class="hero-title">
        ${scenario.hero.greeting}
      </h1>

      <p class="hero-message">
        ${scenario.hero.message}
      </p>

      <button class="hero-button">
        ${scenario.hero.action}
      </button>

    </section>
  `;
}