import {
  generateSectionsData,
  VISUAL_PRESETS,
} from "@/utils/sectionDataGenerator";
import { ABOUT_CONTENT } from "@/constants/shared/about";
import { IMAGE_PRESETS } from "@/constants/gallery";
import { SectionData } from "@/types/ui/components";

export const MISSION_VISION_STICKY_PARALLAX_SECTIONS: readonly SectionData[] =
  generateSectionsData(
    [
      {
        content: {
          contentKeys: ["CFMC_MOTTO", "CFMC_MOTTO_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.GREEN_RIGHT,
          image: IMAGE_PRESETS.SUMMER_CAMP_2025_OUTSIDE_OF_CHAPEL.image,
          altText: IMAGE_PRESETS.SUMMER_CAMP_2025_OUTSIDE_OF_CHAPEL.altText,
        },
      },
      {
        content: {
          contentKeys: ["MISSION_STATEMENT", "MISSION_STATEMENT_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.PURPLE_LEFT,
          image: IMAGE_PRESETS.CHRISTMAS_CHOIR_IMAGE.image,
          altText: IMAGE_PRESETS.CHRISTMAS_CHOIR_IMAGE.altText,
        },
      },
      {
        content: {
          contentKeys: ["VISION_STATEMENT", "VISION_STATEMENT_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.GREEN_RIGHT,
          image: IMAGE_PRESETS.SEVENTH_ANNIVERSARY_IMAGE.image,
          altText: IMAGE_PRESETS.SEVENTH_ANNIVERSARY_IMAGE.altText,
        },
      },
    ],
    ABOUT_CONTENT
  );
