export type ReleaseNotes = {
  id: number;
  created: Date;
  updated: Date;
  releaseDate: Date;
  version: string;
  freshOutTheOven: string;
  bugFixesAndImprovements: string;
  upNext: string;
  specialNotes?: string[];
};

export type WaffleSwitch = {
  id: number;
  created: Date;
  updated: Date;
  name: string;
  isActive: boolean;
  note?: string;
};
