export type ChurchMembers = {
  id: number;
  birthDate?: Date;
  isActive: boolean;
  isBoardMember: boolean;
  bio?: string;
  tags?: string[];
  suffix?: string;
  email?: string;
  role: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  isLeader: boolean;
  headline?: string;
  image?: string;
};

export type ReleaseNotes = {
  id: number;
  releaseDate: Date;
  version: string;
  freshOutTheOven: string;
  bugFixesAndImprovements: string;
  upNext: string;
  specialNotes?: string[];
};

export type WaffleSwitch = {
  id: number;
  name: string;
  isActive: boolean;
  note?: string;
  created?: Date;
  modified?: Date;
};
