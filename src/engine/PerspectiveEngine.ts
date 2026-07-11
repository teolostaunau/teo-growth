import { scenarios } from "./scenarios";
import type { DemoRole, DemoScenario } from "./types";

let currentRole: DemoRole = "owner";

export function getScenario(): DemoScenario {
  return scenarios.find(s => s.id === currentRole)!;
}

export function setRole(role: DemoRole) {
  currentRole = role;
}

export function getRole() {
  return currentRole;
}