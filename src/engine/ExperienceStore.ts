import { scenarios } from "./scenarios";
import type { DemoScenario, DemoRole } from "./types";

let currentIndex = 0;

export function currentScenario(): DemoScenario {
  return scenarios[currentIndex];
}

export function currentRole(): DemoRole {
  return currentScenario().id;
}

export function nextScenario(): DemoScenario {
  currentIndex = (currentIndex + 1) % scenarios.length;
  return currentScenario();
}

export function setScenario(role: DemoRole): DemoScenario {
  const index = scenarios.findIndex(s => s.id === role);

  if (index >= 0) {
    currentIndex = index;
  }

  return currentScenario();
}