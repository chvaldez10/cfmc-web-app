export interface Event {
  id?: number;
  name: string;
  start_date: string; // Adjusted to match database type
  end_date: string; // Adjusted to match database type
  updated_at: string; // Adjusted to match database type
  created_at: string; // Adjusted to match database type
  tags: string[]; // Adjusted to match database type
  category: string;
  occurrence: string;
  description: string;
  image: string;
  location: string;
  status: string;
  organizer_name: string; // Adjusted to match database field name
  slug: string;
}

export interface EventDataProps {
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
  location: string;
  status: string;
  organizerName: string;
  slug: string;
}
