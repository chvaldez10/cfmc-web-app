import {
  generateSectionsData,
  VISUAL_PRESETS,
  SectionData,
} from "@/utils/sectionDataGenerator";
import { ABOUT_CONTENT } from "@/constants/shared/about";
import { IMAGE_PRESETS } from "@/constants/gallery";

export const MISSION_VISION_STICKY_PARALLAX_SECTIONS: SectionData[] =
  generateSectionsData(
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
