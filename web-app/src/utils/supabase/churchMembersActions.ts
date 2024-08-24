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
    birthDate: new Date(data.birth_date),
    isActive: data.is_active,
    isBoardMember: data.is_board_member,
    bio: data.bio,
    traits: data.traits,
    suffix: data.suffix,
    email: data.email,
    role: data.role,
    firstName: data.first_name,
    lastName: data.last_name,
  };
}

export async function getChurchMembersBirthdayByBirthMonth(
  monthIndex: number
): Promise<ChurchMembers[] | null> {
  const supabase = createClient();

  const { data, error } = await supabase.rpc(
    "get_church_members_by_birth_month",
    { month_index: monthIndex }
  );

  if (error) {
    console.error("Error fetching church members birthday:", error);
    return null;
  } else if (!data) {
    console.error("No church members found for month:", monthIndex);
    return null;
  }

  return data.map((event: any) => formatChurchMembersData(event));
}
