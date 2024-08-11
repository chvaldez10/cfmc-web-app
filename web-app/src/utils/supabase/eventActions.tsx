"use server";

import { EventDataProps } from "@/types/supabaseTypes";
import { createClient } from "@/utils/supabase/server";

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

  const formattedData: EventDataProps = {
    id: data.id,
    name: data.name,
    startDate: data.start_date,
    endDate: data.end_date,
    updatedAt: data.updated_at,
    createdAt: data.created_at,
    tags: data.tags,
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

  return formattedData;
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

  const formattedData: EventDataProps = {
    id: data.id,
    name: data.name,
    startDate: data.start_date,
    endDate: data.end_date,
    updatedAt: data.updated_at,
    createdAt: data.created_at,
    tags: data.tags,
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

  return formattedData;
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

  const formattedData: EventDataProps[] = data.map((event) => {
    return {
      id: event.id,
      name: event.name,
      startDate: event.start_date,
      endDate: event.end_date,
      updatedAt: event.updated_at,
      createdAt: event.created_at,
      tags: event.tags ? [...event.tags] : [],
      category: event.category,
      occurrence: event.occurrence,
      description: event.description,
      image: event.image,
      address: event.address,
      googleMapsUrl: event.google_maps_url,
      status: event.status,
      organizerName: event.organizer_name,
      slug: event.slug,
    };
  });

  return formattedData;
}
