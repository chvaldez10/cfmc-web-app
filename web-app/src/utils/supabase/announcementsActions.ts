"use server";

import { createClient } from "@/utils/supabase/server";
import { Announcements } from "@/types/supabaseTypes";

function formatAnnouncementsData(data: any): Announcements {
  return {
    id: data.id,
    date: data.date,
    announcement: data.announcement,
    category: data.category,
    description: data.description,
    eventId: data.event_id,
  };
}
