export const PERSPECTIVES = [
  "owner",
  "executive",
  "viewer",
] as const;

/**
 * Defines the business perspective from which the user
 * experiences the Growth Center.
 *
 * The perspective changes the priority of information,
 * never the underlying business data.
 */

export type Perspective = typeof PERSPECTIVES[number];

export interface BusinessMetric {
  label: string;
  value: string;
  insight: string;
}

export interface HeroContent {
  greeting: string;
  status: string;
  message: string;
  action: string;
}

export interface OpportunityContent {
  title: string;
  description: string;
  probability: string;
  action: string;
}

export interface SnapshotContent {
  title: string;
  metrics: BusinessMetric[];
}

export interface CoachContent {
  title: string;
  summary: string;
  reasons: string[];
}

export interface DemoScenario {
  id: Perspective;
  label: string;

  hero: HeroContent;

  opportunity: OpportunityContent;

  snapshot: SnapshotContent;

  coach: CoachContent;
}