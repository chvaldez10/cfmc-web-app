"use server";

import { EventDataProps } from "@/types/supabaseTypes";
import { createClient } from "@/utils/supabase/server";

function formatEventData(data: any): EventDataProps {
  return {
    id: data.id,
    name: data.name,
    startDate: new Date(data.start_date),
    endDate: new Date(data.end_date),
    updatedAt: new Date(data.updated_at),
    createdAt: new Date(data.created_at),
    tags: data.tags ? [...data.tags] : [],
    category: data.category,
    occurrence: data.occurrence,
    description: data.description,
    image: data.image,
    address: data.address,
    googleMapsUrl: data.google_maps_url,
    status: data.status,
    organizerName: data.organizer_name,
    slug: data.slug,
  };
}

export async function getEventBySlug(
  slug: string
): Promise<EventDataProps | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching event:", error);
    return null;
  } else if (!data) {
    console.error("No event data found for slug:", slug);
    return null;
  }

  return formatEventData(data);
}

export async function getEventById(id: number): Promise<EventDataProps | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching event ID:", error);
    return null;
  } else if (!data) {
    console.error("No event data found for id:", id);
    return null;
  }

  return formatEventData(data);
}

export async function getEventsByMonth(
  monthIndex: number,
  year: number
): Promise<EventDataProps[] | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .gte("start_date", `${year}-${monthIndex}-01`)
    .lte("start_date", `${year}-${monthIndex}-31`);

  if (error) {
    console.error("Error fetching events:", error);
    return null;
  } else if (!data) {
    console.error("No events found for month:", monthIndex, year);
    return null;
  }

  return data.map((event) => formatEventData(event));
}
