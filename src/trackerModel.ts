export enum Confidence {
  notCovered = 0,
  veryHigh = 1,
  high = 2,
  medium = 3,
  low = 4,
}

// Dashboard Summary
export interface IByConfidenceCount {
  [confidence: number]: number;
}

export interface ISectionSummary {
  percentCovered: number;
  byConfidence: IByConfidenceCount;
}

export interface ITrackerDashboardSummary {
  [sectionId: string]: ISectionSummary;
}

// Raw Trackers
export interface IRequirementTracker {
  specificationId: string;
  componentId: string;
  sectionId: string;
  subsectionId: string;
  requirementIndex: number;
  confidence: Confidence;
}

export interface ISpecificationTracker {
  specificationId: string;
}
