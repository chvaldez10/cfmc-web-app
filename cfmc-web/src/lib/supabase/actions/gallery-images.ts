"use server";

import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { HOME_JUMBO_LIMIT, GalleryItem } from "@/constants/gallery";

export const getGalleryItems = cache(
  async (type: string): Promise<GalleryItem[]> => {
    const supabase = await createClient();

    const { data: imageRecords, error: dbError } = await supabase
      .from("gallery_images")
      .select("id, title, image_path, alt_text")
      .eq("type", type)
      .order("display_order", { ascending: true })
      .limit(HOME_JUMBO_LIMIT);

    if (dbError) {
      console.error("Database Error:", dbError.message);
      throw new Error("Failed to fetch gallery items");
    }

    return Promise.all(
      (imageRecords || []).map(async (record): Promise<GalleryItem> => {
        const { data: publicUrlData } = supabase.storage
          .from("images")
          .getPublicUrl(record.image_path);

        return {
          id: record.id,
          title: record.title,
          image: publicUrlData.publicUrl,
          altText: record.alt_text || record.title,
        };
      })
    );
  }
);
