"use server";

import { createClient } from "@/lib/supabase/server";
import { findNextSundayWorshipService } from "@/utils/dateUtils";

export type SundaysAndSpecialDays = {
  date: string;
  title: string;
  description: string;
  image: string;
};

export async function getNextSundayWorshipService(): Promise<SundaysAndSpecialDays | null> {
  const supabase = await createClient();
  const nextSunday = findNextSundayWorshipService();

  // Extract just the date part (YYYY-MM-DD) for querying
  // This avoids timezone/time precision issues
  const dateOnly = nextSunday.toISOString().split("T")[0];

  // Query using date range to handle different time formats in DB
  const startOfDay = `${dateOnly}T00:00:00`;
  const endOfDay = `${dateOnly}T23:59:59`;

  const { data, error } = await supabase
    .from("sundays_and_special_days")
    .select("*")
    .gte("date", startOfDay)
    .lte("date", endOfDay)
    .single();

  if (error) {
    console.error(error);
    return null;
  } else if (!data) {
    console.error("No Sundays and Special Days found");
    return null;
  }

  return data;
}
