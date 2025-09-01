import { VISUAL_PRESETS, IMAGE_PRESETS } from "@/utils/sectionDataGenerator";
import { generateSectionsData } from "@/utils/sectionDataGenerator";
import { SectionData } from "@/utils/sectionDataGenerator";
import { ABOUT_CONTENT } from "@/constants/shared/about";

// Data for mission and vision sections - much cleaner!
export const SECTIONS_DATA: SectionData[] = generateSectionsData(
  [
    {
      content: {
        contentKeys: ["VISION_STATEMENT", "VISION_STATEMENT_QUOTE"],
      },
      visual: {
        ...VISUAL_PRESETS.PURPLE_LEFT,
        ...IMAGE_PRESETS.COMMUNITY_GATHERING,
      },
    },
    {
      content: {
        contentKeys: ["MISSION_STATEMENT", "MISSION_STATEMENT_QUOTE"],
      },
      visual: {
        ...VISUAL_PRESETS.GREEN_RIGHT,
        ...IMAGE_PRESETS.SERVICE_OUTREACH,
      },
    },
    {
      content: {
        contentKeys: ["CFMC_MOTTO", "CFMC_MOTTO_QUOTE"],
      },
      visual: {
        ...VISUAL_PRESETS.PURPLE_LEFT,
        ...IMAGE_PRESETS.WORSHIP_SERVICE,
      },
    },
  ],
  ABOUT_CONTENT
);
