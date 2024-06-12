export interface FeatureList {
  [featureHeader: string]: string;
}

export interface Features {
  date: string;
  featureList: FeatureList;
}

export interface ReleaseDetails {
  version: string;
  details: Features;
}

export interface ReleaseData {
  year: number;
  releaseItems: ReleaseDetails[];
}
