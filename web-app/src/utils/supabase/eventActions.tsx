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
  } else if (!data) {
    console.error("No event data found for slug:", slug);
    return null;
  }

  return data;
}

export async function getEventsByMonth(
  monthIndex: number,
  year: number
): Promise<EventDataProps[] | null> {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("start_date", monthIndex)
    .eq("start_date", year);

  if (error) {
    console.error("Error fetching events:", error);
    return null;
  } else if (!data) {
    console.error("No events found for month:", monthIndex, year);
    return null;
  }

  return data;
}
