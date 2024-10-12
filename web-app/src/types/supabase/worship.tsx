export type Events = {
  id: number;
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
  isSundayWorship: boolean;
};

export type SundaysAndSpecialDays = {
  id: number;
  date: Date;
  sundayEventName: string;
  liturgicalColor: string;
  scriptureReadings?: string[];
  preacher?: string;
  sermonTitle?: string;
  sermonSeries?: string;
  preacherNotes?: string;
  sundayEventAlternateName?: string;
  eventId?: number;
  liturgy?: string;
  announcements?: string;
  hymnOfDiscipleship?: string;
};

export type Announcements = {
  id: number;
  date: Date;
  announcement: string;
  category: string;
  description: string;
  eventId?: number;
  isActive: boolean;
};

export type WorshipSongs = {
  id: number;
  songTitle: string;
  artist?: string;
  image: string;
  created?: Date;
  modified?: Date;
};
