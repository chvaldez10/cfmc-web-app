import { generateSectionsData } from "@/utils/sectionDataGenerator";
import { SectionData } from "@/types/ui/components";
import { VISUAL_PRESETS } from "@/utils/sectionDataGenerator";
import { MEDIA_CONTENT } from "@/constants/shared/media";
import { MEDIA_INQUIRY_GALLERY_ITEMS } from "@/constants/gallery";

export const MEDIA_INQUIRY_STICKY_PARALLAX_SECTIONS: readonly SectionData[] =
  generateSectionsData(
    [
      {
        content: {
          contentKeys: ["MEDIA_TEAM"],
        },
        visual: {
          ...VISUAL_PRESETS.PURPLE_LEFT,
          image: MEDIA_INQUIRY_GALLERY_ITEMS.MEDIA_TOOLS_IMAGE.image,
          altText: MEDIA_INQUIRY_GALLERY_ITEMS.MEDIA_TOOLS_IMAGE.altText,
        },
      },
      {
        content: {
          contentKeys: ["PRAISE_WORSHIP_TEAM"],
        },
        visual: {
          ...VISUAL_PRESETS.GREEN_RIGHT,
          image: MEDIA_INQUIRY_GALLERY_ITEMS.PRAISE_WORSHIP_TEAM_IMAGE.image,
          altText:
            MEDIA_INQUIRY_GALLERY_ITEMS.PRAISE_WORSHIP_TEAM_IMAGE.altText,
        },
      },
    ],
    MEDIA_CONTENT
  );
