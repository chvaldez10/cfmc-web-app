"use server";

import { WaffleSwitch } from "@/types/supabaseTypes";
import { createClient } from "@/utils/supabase/server";

function formatWaffleSwitchData(data: any): WaffleSwitch {
  return {
    id: data.id,
    name: data.name,
    isActive: data.is_active,
    note: data.note,
    created: data.created,
    modified: data.modified,
  };
}

export async function getWaffleSwitch(
  name: string
): Promise<WaffleSwitch | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("waffle_switch")
    .select("*")
    .eq("name", name)
    .single();

  if (error) {
    console.error("Error fetching waffle switch:", error);
    return null;
  } else if (!data) {
    console.error("No waffle switch found for name:", name);
    return null;
  }

  return formatWaffleSwitchData(data);
}
