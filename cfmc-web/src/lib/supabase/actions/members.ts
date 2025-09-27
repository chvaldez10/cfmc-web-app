"use server";

import { createClient } from "@/lib/supabase/server";
import { ChurchMembers } from "@/types/supabase/members";

export async function createChurchMember(
  member: ChurchMembers
): Promise<ChurchMembers> {
  const supabase = await createClient();

  // Convert camelCase to snake_case for database insertion
  const memberData = {
    first_name: member.firstName,
    last_name: member.lastName,
    email: member.email,
    phone_number: member.phoneNumber,
    birth_date: member.birthDate
      ? member.birthDate.toISOString().split("T")[0]
      : "",
    role: member.role || "Member",
    is_active: member.isActive ?? true,
    is_board_member: member.isBoardMember ?? false,
    is_leader: member.isLeader ?? false,
    username: member.username,
    bio: member.bio,
    tags: member.tags || [],
    suffix: member.suffix,
    headline: member.headline,
    image_banner: member.image_banner,
    image_profile: member.image_profile,
  };

  const { data, error } = await supabase
    .from("church_members")
    .insert(memberData)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create church member: ${error.message}`);
  }

  // Convert snake_case back to camelCase for return
  return {
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    phoneNumber: data.phone_number,
    birthDate: data.birth_date ? new Date(data.birth_date) : undefined,
    role: data.role,
    isActive: data.is_active,
    isBoardMember: data.is_board_member,
    isMinisterialTeam: false, // Default value, not stored in database yet
    isLeader: data.is_leader,
    username: data.username,
    bio: data.bio,
    tags: data.tags || [],
    suffix: data.suffix,
    headline: data.headline,
    image_banner: data.image_banner,
    image_profile: data.image_profile,
  };
}

export async function uploadMemberImage(
  file: File,
  memberId?: string
): Promise<{ imagePath: string; publicUrl: string }> {
  const supabase = await createClient();

  // Create a unique filename
  const fileExt = file.name.split(".").pop();
  const fileName = `${memberId || "temp"}_${Date.now()}.${fileExt}`;
  const filePath = `member_profile/${fileName}`;

  // Upload to Supabase storage - using the correct bucket "images"
  const { data, error } = await supabase.storage
    .from("images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }

  // Get public URL
  const { data: publicUrlData } = supabase.storage
    .from("images")
    .getPublicUrl(filePath);

  return {
    imagePath: data.path,
    publicUrl: publicUrlData.publicUrl,
  };
}
