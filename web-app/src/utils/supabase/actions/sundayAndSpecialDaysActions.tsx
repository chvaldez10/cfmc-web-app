"use server";

import { SundaysAndSpecialDays } from "@/types/supabaseTypes";
import { getNextSunday } from "../../common/dateUtils";
import { createClient } from "@/utils/supabase/server";

/*
  @param data: any - The data to be formatted to the SundaysAndSpecialDays type
  @returns SundaysAndSpecialDays - The formatted data
*/
function formatSundaysAndSpecialDaysData(data: any): SundaysAndSpecialDays {
  return {
    id: data.id,
    date: data.date,
    sundayEventName: data.sunday_event_name,
    liturgicalColor: data.liturgical_color,
    scriptureReadings: data.scripture_readings,
    preacher: data.preacher,
    sermonTitle: data.sermon_title,
    sermonSeries: data.sermon_series,
    preacherNotes: data.preacher_notes,
    sundayEventAlternateName: data.sunday_event_alternate_name,
    eventId: data.event_id,
    liturgy: data.liturgy,
    announcements: data.announcements,
  };
}

export async function getSundaysAndSpecialDays(): Promise<SundaysAndSpecialDays | null> {
  const supabase = createClient();
  const nextSunday = getNextSunday();
  const formattedDate = nextSunday
    .toISOString()
    .replace("T", " ")
    .replace("Z", "+00");

  const { data, error } = await supabase
    .from("sundays_and_special_days")
    .select("*")
    .eq("date", formattedDate)
    .single();

  if (error) {
    console.error(error);
    return null;
  } else if (!data) {
    console.error("No Sundays and Special Days found");
    return null;
  }

  return formatSundaysAndSpecialDaysData(data);
}

export async function getSundaysAndSpecialDaysById(
  eventId: number
): Promise<SundaysAndSpecialDays | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("sundays_and_special_days")
    .select("*")
    .eq("event_id", eventId)
    .single();

  if (error) {
    console.error(error);
    return null;
  } else if (!data) {
    console.error("No Sundays and Special Days found");
    return null;
  }

  return formatSundaysAndSpecialDaysData(data);
}
