"use server";

import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { Events } from "@/types/supabase/worship";

export const getEventBySlug = cache(
  async (slug: string): Promise<Events | null> => {
    const supabase = await createClient();

    const { data, error: dbError } = await supabase
      .from("events")
      .select("*")
      .eq("slug", slug)
      .limit(1)
      .single();

    if (dbError) {
      if (dbError.code === "PGRST116") {
        return null;
      }
      console.error("Database Error:", dbError.message);
      throw new Error("Failed to fetch event");
    }

    return data;
  }
);

export const getFeaturedEvents = cache(async (): Promise<Events[] | null> => {
  const supabase = await createClient();

  const { data, error: dbError } = await supabase
    .from("events")
    .select("*")
    .eq("is_featured", true)
    .order("start_date", { ascending: true });

  if (dbError) {
    console.error("Database Error:", dbError.message);
    throw new Error("Failed to fetch event");
  }

  if (!data) {
    return null;
  }

  return data;
});

export const getUpcomingEvents = cache(async (): Promise<Events[] | null> => {
  const supabase = await createClient();
  const now = new Date().toISOString();

  const { data, error: dbError } = await supabase
    .from("events")
    .select("*")
    .gte("start_date", now)
    .eq("status", "upcoming")
    .order("start_date", { ascending: true });

  if (dbError) {
    console.error("Database Error:", dbError.message);
    throw new Error("Failed to fetch upcoming events");
  }

  if (!data) {
    return null;
  }

  return data;
});
