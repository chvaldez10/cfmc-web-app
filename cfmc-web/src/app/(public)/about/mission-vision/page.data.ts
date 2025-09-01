import { VISUAL_PRESETS } from "@/utils/sectionDataGenerator";
import { generateSectionsData } from "@/utils/sectionDataGenerator";
import { SectionData } from "@/utils/sectionDataGenerator";
import { ABOUT_CONTENT } from "@/constants/shared/about";
import { IMAGE_PRESETS } from "@/constants/gallery";

export const SECTIONS_DATA: SectionData[] = generateSectionsData(
  [
    {
      content: {
        contentKeys: ["VISION_STATEMENT", "VISION_STATEMENT_QUOTE"],
      },
      visual: {
        ...VISUAL_PRESETS.PURPLE_LEFT,
        ...IMAGE_PRESETS.SEVENTH_ANNIVERSARY_IMAGE,
      },
    },
    {
      content: {
        contentKeys: ["MISSION_STATEMENT", "MISSION_STATEMENT_QUOTE"],
      },
      visual: {
        ...VISUAL_PRESETS.GREEN_RIGHT,
        ...IMAGE_PRESETS.CHRISTMAS_CHOIR_IMAGE,
      },
    },
    {
      content: {
        contentKeys: ["CFMC_MOTTO", "CFMC_MOTTO_QUOTE"],
      },
      visual: {
        ...VISUAL_PRESETS.PURPLE_LEFT,
        ...IMAGE_PRESETS.SUMMER_CAMP_2025_OUTSIDE_OF_CHAPEL,
      },
    },
  ],
  ABOUT_CONTENT
);
