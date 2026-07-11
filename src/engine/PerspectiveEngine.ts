import { scenarios } from "./scenarios";

import type {
  Perspective,
  DemoScenario,
} from "./types";

let currentPerspective: Perspective = "owner";

export function getScenario(): DemoScenario {
  return scenarios.find(
    s => s.id === currentPerspective
  )!;
}

export function setPerspective(
  perspective: Perspective
) {
  currentPerspective = perspective;
}

export function getPerspective(): Perspective {
  return currentPerspective;
}