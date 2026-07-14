import "./HeroExperience.css";
import { DemoEngine } from "../../engine/DemoEngine";

function getGreeting(): { icon: string; text: string } {

  const hour = new Date().getHours();

  if (hour < 12) {
    return {
      icon: "☀️",
      text: "Buenos días"
    };
  }

  if (hour < 18) {
    return {
      icon: "🌤️",
      text: "Buenas tardes"
    };
  }

  return {
    icon: "🌙",
    text: "Buenas noches"
  };

}

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
  
  const greeting = getGreeting();

  return `

    <section class="tg-hero-card">

      <div class="growth-welcome">

        <div class="growth-welcome-header">
          <div class="hero-icon">
            ${greeting.icon}
          </div>
          <div class="hero-heading">
            <h1 class="growth-title">
              ${greeting.text}, ${scenario.hero.greeting}
            </h1>

            <p class="growth-date">
              ${formattedToday}
            </p>
          </div>
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