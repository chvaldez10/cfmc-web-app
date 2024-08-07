"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { SundaysAndSpecialDaysProps } from "@/types/supabaseTypes";
import { getNextSunday, getMonthNameAndDay } from "../common/dateUtils";

export async function getSundaysAndSpecialDays(): Promise<
  SundaysAndSpecialDaysProps[] | null
> {
  const supabase = createServerComponentClient({ cookies });
  const nextSunday = getNextSunday(new Date());
  const nextSundayMDT = nextSunday.toLocaleDateString("en-US", {
    timeZone: "America/Denver",
  });

  const { data, error } = await supabase
    .from("sundays_and_special_days")
    .select("*")
    .eq("date", nextSundayMDT);

  if (error) {
    console.error(error);
    return null;
  } else if (!data) {
    console.error("No Sundays and Special Days found");
    return null;
  }

  return data;
}
