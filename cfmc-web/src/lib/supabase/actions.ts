"use server";

import { createClient } from "@/lib/supabase/server";

// TODO: Consolidate types
export type TransformedGalleryItem = {
  id: number;
  title: string;
  image: string;
  altText: string;
};

export async function getGalleryItems(): Promise<TransformedGalleryItem[]> {
  const supabase = await createClient();

  const { data: imageRecords, error } = await supabase
    .from("gallery_images")
    .select("id, title, image_path, alt_text")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Database Error:", error.message);
    return [];
  }

  if (!imageRecords) {
    return [];
  }

  const galleryItems: TransformedGalleryItem[] = imageRecords.map((record) => {
    const { data: publicUrlData } = supabase.storage
      .from("images")
      .getPublicUrl(record.image_path);

    return {
      id: record.id,
      title: record.title,
      image: publicUrlData.publicUrl,
      altText: record.alt_text || record.title,
    };
  });

  return galleryItems;
}
