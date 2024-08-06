"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { EventDataProps } from "@/types/supabaseTypes";

export async function getEventBySlug(
  slug: string
): Promise<EventDataProps | null> {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching event:", error);
    return null;
  }

  if (!data) {
    console.error("No event data found for slug:", slug);
    return null;
  }

  return data;
}
