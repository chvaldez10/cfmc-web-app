import mediaContentData from "@/data/media-content.json";
import { AboutContentItem } from "@/types/ui/components";

export const MEDIA_CONTENT: Record<string, AboutContentItem> =
  mediaContentData as Record<string, AboutContentItem>;
