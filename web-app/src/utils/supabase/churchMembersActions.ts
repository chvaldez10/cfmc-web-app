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
    phoneNumber: data.phone_number,
    isLeader: data.is_leader,
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

export async function getChurchMembersBoardMembers(): Promise<
  ChurchMembers[] | null
> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("church_members")
    .select("*")
    .eq("is_board_member", true);

  if (error) {
    console.error("Error fetching church members board members:", error);
    return null;
  } else if (!data) {
    console.error("No church members board members found");
    return null;
  }

  return data.map((event: any) => formatChurchMembersData(event));
}
