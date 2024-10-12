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
    featured: data.featured,
    rank: data.rank,
  };
}

export async function getFeaturedWorshipSongs(): Promise<
  WorshipSongs[] | null
> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("worship_songs")
    .select("*")
    .eq("featured", true);

  if (error) {
    throw new Error(error.message);
  } else if (!data) {
    console.error("No featured worship songs found");
    return null;
  }

  return data.map((song: any) => formatWorshipSongsData(song));
}
