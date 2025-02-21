// TODO: this should not be hard coded and instead extracted from supabase
export type Events = {
  id: number;
  created: Date;
  updated: Date;
  name: string;
  startDate: Date;
  endDate: Date;
  updatedAt?: Date;
  createdAt?: Date;
  tags?: string[];
  category: string;
  occurrence: string; // Should be enum (one-time, recurring)
  description: string;
  image: string;
  address: string;
  googleMapsUrl?: string;
  status: string;
  organizerName: string;
  slug: string;
  isSundayWorship: boolean;
};
