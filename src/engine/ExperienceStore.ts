import { scenarios } from "./scenarios";
import type { DemoScenario, Perspective } from "./types";

let currentIndex = 0;

export function currentScenario(): DemoScenario {
  return scenarios[currentIndex];
}

export function currentRole(): Perspective {
  return currentScenario().id;
}

export function nextScenario(): DemoScenario {
  currentIndex = (currentIndex + 1) % scenarios.length;
  return currentScenario();
}

export function setScenario(
  perspective: Perspective
): DemoScenario {

  const index = scenarios.findIndex(
    s => s.id === perspective
  );

  if (index >= 0) {
    currentIndex = index;
  }

  return currentScenario();
}