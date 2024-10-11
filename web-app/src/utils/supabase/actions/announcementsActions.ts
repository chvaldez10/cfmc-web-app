"use server";

import { createClient } from "@/utils/supabase/server";
import { Announcements } from "@/types/supabase/worship";

function formatAnnouncementsData(data: any): Announcements {
  return {
    id: data.id,
    date: new Date(data.date),
    announcement: data.announcement,
    category: data.category,
    description: data.description,
    eventId: data.event_id,
    isActive: data.is_active,
  };
}

export async function getAnnouncements(): Promise<Announcements[] | null> {
  const supabase = createClient();
  const { data, error } = await supabase.from("announcements").select("*");
  if (error) {
    throw new Error(error.message);
  } else if (!data) {
    console.error("No announcements found");
    return null;
  }
  return data.map((announcement: any) => formatAnnouncementsData(announcement));
}
