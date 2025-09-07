export interface Event {
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
  image: string; // legacy single image (backwards compatibility)
  images: string[];
  occurrence: string;
  status: string;
  tags: string[];
  created: string | null;
  updated: string | null;
  created_at: string;
  updated_at: string;
  is_sunday_worship: boolean | null;
}
