export type DemoRole =
  | "owner"
  | "agent"
  | "viewer"
  | "coach";

export interface BusinessMetric {
  label: string;
  value: string;
}

export interface DemoScenario {
  role: DemoRole;

  hero: {
    greeting: string;
    message: string;
    action: string;
  };

  opportunity: {
    title: string;
    description: string;
    probability: string;
  };

  snapshot: BusinessMetric[];

  coach: {
    title: string;
    message: string;
  };
}