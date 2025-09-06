import {
  generateSectionsData,
  VISUAL_PRESETS,
} from "@/utils/sectionDataGenerator";
import { MINISTRIES_CONTENT } from "@/constants/ministries";
import { IMAGE_PRESETS } from "@/constants/gallery";
import { SectionData } from "@/types/ui/components";

export const MISSION_VISION_STICKY_PARALLAX_SECTIONS: readonly SectionData[] =
  generateSectionsData(
    [
      {
        content: {
          contentKeys: ["DISCIPLESHIP"],
        },
        visual: {
          ...VISUAL_PRESETS.PURPLE_LEFT,
          image: IMAGE_PRESETS.SEVENTH_ANNIVERSARY_IMAGE.image,
          altText: IMAGE_PRESETS.SEVENTH_ANNIVERSARY_IMAGE.altText,
        },
      },
      {
        content: {
          contentKeys: ["CHILDREN"],
        },
        visual: {
          ...VISUAL_PRESETS.GREEN_RIGHT,
          image: IMAGE_PRESETS.CHRISTMAS_CHOIR_IMAGE.image,
          altText: IMAGE_PRESETS.CHRISTMAS_CHOIR_IMAGE.altText,
        },
      },
    ],
    MINISTRIES_CONTENT
  );
