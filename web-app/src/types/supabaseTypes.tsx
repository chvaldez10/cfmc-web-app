export type Events = {
  id?: number;
  name: string;
  startDate: Date;
  endDate: Date;
  updatedAt?: Date;
  createdAt?: Date;
  tags?: string[];
  category: string;
  occurrence: string;
  description: string;
  image: string;
  address: string;
  googleMapsUrl?: string;
  status: string;
  organizerName: string;
  slug: string;
};

export type SundaysAndSpecialDaysProps = {
  id?: number;
  date: Date;
  sundayEventName: string;
  liturgicalColor: string;
  scriptureReadings?: string[];
  preacher?: string;
  sermonTitle?: string;
  sermonSeries?: string;
  preacherNotes?: string;
  sundayEventAlternateName?: string;
  eventId?: number; // reference to the event
};

export type AnnouncementProps = {
  id?: number;
  date: Date;
  announcement: string;
  category: string;
  description: string;
  eventId?: number;
};

export type ChurchMembersProps = {
  id?: number;
  name: string;
  birthDate?: Date;
};

export type ReleaseProps = {
  id?: number;
  releaseDate: Date;
  version: string;
  freshOutTheOven: string;
  bugFixesAndImprovements: string;
  upNext?: string;
  specialNotes?: string;
};
