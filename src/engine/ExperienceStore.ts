import { scenarios } from "./scenarios";

let index = 0;

export function currentScenario() {
  return scenarios[index];
}

export function nextScenario() {
  index = (index + 1) % scenarios.length;

  return currentScenario();
}