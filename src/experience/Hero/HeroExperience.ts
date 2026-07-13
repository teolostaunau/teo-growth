import "./HeroExperience.css";
import { DemoEngine } from "../../engine/DemoEngine";

export function HeroExperience(): string {

  const scenario = DemoEngine.current();

  const today = new Intl.DateTimeFormat("es-PE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date());

  const formattedToday =
    `Hoy es ${today.charAt(0).toLowerCase()}${today.slice(1)}`;

  return `

    <section class="tg-hero-card">

      <div class="growth-welcome">

        <div class="growth-welcome-header">

          <h1 class="growth-title">
            ${scenario.hero.greeting}
          </h1>

          <p class="growth-date">
            ${formattedToday}
          </p>

        </div>

        <p class="growth-message">
          ${scenario.hero.message}
        </p>

        <div class="growth-footer">

          <div class="growth-status">
            ${scenario.hero.status}
          </div>

          <button class="hero-button">
            ${scenario.hero.action}
          </button>

        </div>

      </div>

    </section>

  `;

}