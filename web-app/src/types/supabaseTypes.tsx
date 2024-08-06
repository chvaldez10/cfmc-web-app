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
