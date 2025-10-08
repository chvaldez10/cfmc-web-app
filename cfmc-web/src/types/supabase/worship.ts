import { EventStatusType } from "@/types/ui/components";

export interface Events {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  organizer_name: string;
  address: string;
  start_date: string;
  end_date: string;
  google_maps_url: string;
  image: string;
  images: string[];
  occurrence: string;
  status: EventStatusType;
  tags: string[];
  created: string;
  updated: string | null;
  is_sunday_worship: boolean | null;
  is_featured: boolean | null;
}
