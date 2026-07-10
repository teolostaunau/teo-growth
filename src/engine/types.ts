export type DemoRole =
  | "owner"
  | "agent"
  | "viewer"
  | "coach";

export interface BusinessMetric {
  label: string;
  value: string;
}

export interface HeroContent {
  greeting: string;
  message: string;
  action: string;
}

export interface OpportunityContent {
  title: string;
  description: string;
  probability: string;
}

export interface CoachContent {
  title: string;
  message: string;
}

export interface DemoScenario {
  id: DemoRole;
  label: string;

  hero: HeroContent;

  opportunity: OpportunityContent;

  snapshot: BusinessMetric[];

  coach: CoachContent;
}