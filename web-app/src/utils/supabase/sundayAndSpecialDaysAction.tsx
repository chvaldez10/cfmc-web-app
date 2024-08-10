"use server";

import { SundaysAndSpecialDaysProps } from "@/types/supabaseTypes";
import { getNextSunday } from "../common/dateUtils";
import { createClient } from "@/utils/supabase/server";

export async function getSundaysAndSpecialDays(): Promise<SundaysAndSpecialDaysProps | null> {
  const supabase = createClient();
  const nextSunday = getNextSunday(new Date());
  const nextSundayMDT = nextSunday.toLocaleDateString("en-US", {
    timeZone: "America/Denver",
  });

  // should only return one instance regardless of duplicate dates
  const { data, error } = await supabase
    .from("sundays_and_special_days")
    .select("*")
    .eq("date", nextSundayMDT)
    .single();

  if (error) {
    console.error(error);
    return null;
  } else if (!data) {
    console.error("No Sundays and Special Days found");
    return null;
  }

  const formattedData: SundaysAndSpecialDaysProps = {
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
  };

  return formattedData;
}
