"use server";

import { createClient } from "@/utils/supabase/server";
import { ChurchMembers } from "@/types/supabaseTypes";

/*
  @param data: any - The data to be formatted to the ChurchMembers type
  @returns ChurchMembers - The formatted data
*/

function formatChurchMembersData(data: any): ChurchMembers {
  return {
    id: data.id,
    name: data.name,
    birthDate: new Date(data.birth_date),
  };
}

export async function getChurchMembersBirthdayForMonth(
  monthIndex: number,
  year: number
): Promise<ChurchMembers[] | null> {
  const supabase = createClient();
  const lastDay = new Date(year, monthIndex, 0).getDate();

  const { data, error } = await supabase
    .from("church_members")
    .select("*")
    .gte("birth_date", `${year}-${monthIndex}-01`)
    .lte("birth_date", `${year}-${monthIndex}-${lastDay}`)
    .order("birth_date");

  if (error) {
    console.error("Error fetching church members birthday:", error);
    return null;
  } else if (!data) {
    console.error("No church members found for month:", monthIndex, year);
    return null;
  }

  return data.map((event: any) => formatChurchMembersData(event));
}
