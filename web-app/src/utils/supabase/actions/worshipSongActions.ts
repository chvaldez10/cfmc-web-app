"use server";

import { createClient } from "@/utils/supabase/server";
import { WorshipSongs } from "@/types/supabase/worship";

function formatWorshipSongsData(data: any): WorshipSongs {
  return {
    id: data.id,
    created: new Date(data.created),
    updated: new Date(data.updated),
    songTitle: data.song_title,
    artist: data.artist,
    image: data.image,
    youtube: data.youtube,
  };
}
