export interface EventData {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  category: string;
  description: string;
  image: string;
  location: string;
  status: string;
  organizerName: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventDataProps {
  id?: number;
  name: string;
  startDate: Date;
  endDate: Date;
  category: string;
  description: string;
  image: string;
  location: string;
  status: string;
  organizerName: string;
  slug: string;
}
