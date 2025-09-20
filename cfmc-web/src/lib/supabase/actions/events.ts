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
    .order("created", { ascending: false });

  if (dbError) {
    console.error("Database Error:", dbError.message);
    throw new Error("Failed to fetch event");
  }

  if (!data) {
    return null;
  }

  return data;
});
