export const CONFIDENCE_NOT_COVERED = "not_covered";
export const CONFIDENCE_VERY_HIGH = "very_high";
export const CONFIDENCE_HIGH = "high";
export const CONFIDENCE_MEDIUM = "medium";
export const CONFIDENCE_LOW = "low";

export type Confidence =
  | "not_covered"
  | "very_high"
  | "high"
  | "medium"
  | "low";

export const ConfidenceOptions: Confidence[] = [
  CONFIDENCE_NOT_COVERED,
  CONFIDENCE_VERY_HIGH,
  CONFIDENCE_HIGH,
  CONFIDENCE_MEDIUM,
  CONFIDENCE_LOW,
];

// Dashboard Summary
export interface IByConfidenceCount {
  [confidence: string]: number;
}

export interface ISectionSummary {
  percentCovered: number;
  byConfidence: IByConfidenceCount;
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
