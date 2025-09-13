"use server";

import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { Event } from "@/types/events";

export const getEventBySlug = cache(
  async (slug: string): Promise<Event | null> => {
    const supabase = await createClient();

    const { data, error: dbError } = await supabase
      .from("events")
      .select("*")
      .eq("slug", slug)
      .limit(1)
      .single();

    if (dbError) {
      console.error("Database Error:", dbError.message);
      throw new Error("Failed to fetch event");
    }

    return {
      id: data.id,
      slug: data.slug,
      name: data.name,
      category: data.category,
      description: data.description,
      organizer_name: data.organizer_name,
      address: data.address,
      start_date: data.start_date,
      end_date: data.end_date,
      google_maps_url: data.google_maps_url || "",
      image: data.image,
      images: data.images,
      occurrence: data.occurrence,
      status: data.status,
      tags: data.tags || [],
      created: data.created,
      updated: data.updated,
      created_at: data.created_at,
      updated_at: data.updated_at,
      is_sunday_worship: data.is_sunday_worship,
    };
  }
);
