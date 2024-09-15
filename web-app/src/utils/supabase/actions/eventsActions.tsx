"use server";

import { Events } from "@/types/supabaseTypes";
import { createClient } from "@/utils/supabase/server";

/*
  @param data: any - The data to be formatted to the Events type
  @returns Events - The formatted data
*/
function formatEventData(data: any): Events {
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

export async function getEventBySlug(slug: string): Promise<Events | null> {
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

export async function getEventById(id: number): Promise<Events | null> {
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

export async function getEventsFromRange(): Promise<Events[] | null> {
  const supabase = createClient();

  const { data, error } = await supabase.rpc("get_events_from_range");

  if (error) {
    console.error("Error fetching events:", error);
    return null;
  } else if (!data) {
    console.error("No events found");
    return null;
  }

  return data.map((event: any) => formatEventData(event));
}
