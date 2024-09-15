"use server";

import { ReleaseNotes } from "@/types/supabaseTypes";
import { createClient } from "@/utils/supabase/server";

/*
  @param data: any - The data to be formatted to the ReleaseNotes type
  @returns ReleaseNotes - The formatted data
*/
function formatReleaseNotesData(data: any): ReleaseNotes {
  return {
    id: data.id,
    releaseDate: new Date(data.release_date),
    version: data.version,
    freshOutTheOven: data.fresh_out_the_oven,
    bugFixesAndImprovements: data.bug_fixes_and_improvements,
    upNext: data.up_next,
    specialNotes: data.special_notes ? [...data.special_notes] : [],
  };
}

export async function getReleaseNotesByYear(
  year: number
): Promise<ReleaseNotes[] | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("release_notes")
    .select("*")
    .order("release_date", { ascending: false });
  // .eq("release_date", year);

  if (error) {
    console.error("Error fetching release notes:", error);
    return null;
  } else if (!data) {
    console.error("No release notes found");
    return null;
  }

  return data.map((release: any) => formatReleaseNotesData(release));
}
