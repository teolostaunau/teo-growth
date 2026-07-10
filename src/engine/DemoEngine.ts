import {
  currentScenario,
  nextScenario,
  setScenario
} from "./ExperienceStore";

export const DemoEngine = {

  current() {
    return currentScenario();
  },

  next() {
    return nextScenario();
  },

  change(role: Parameters<typeof setScenario>[0]) {
    return setScenario(role);
  }

};