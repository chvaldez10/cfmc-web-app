import {
  generateSectionsData,
  VISUAL_PRESETS,
} from "@/utils/sectionDataGenerator";
import { MINISTRIES_CONTENT } from "@/constants/shared/ministries";
import { IMAGE_PRESETS } from "@/constants/gallery";
import { SectionData } from "@/types/ui/components";

export const MINISTRIES_STICKY_PARALLAX_SECTIONS: readonly SectionData[] =
  generateSectionsData(
    [
      {
        content: {
          contentKeys: ["OUTREACH_MINISTRY", "OUTREACH_MINISTRY_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.PURPLE_LEFT,
          image: IMAGE_PRESETS.OUTREACH_MINISTRY_IMAGE_1.image,
          altText: IMAGE_PRESETS.OUTREACH_MINISTRY_IMAGE_1.altText,
        },
      },
      {
        content: {
          contentKeys: [
            "PRAISE_WORSHIP_MINISTRY",
            "PRAISE_WORSHIP_MINISTRY_QUOTE",
          ],
        },
        visual: {
          ...VISUAL_PRESETS.GREEN_RIGHT,
          image: IMAGE_PRESETS.PRAISE_WORSHIP_MINISTRY_IMAGE_1.image,
          altText: IMAGE_PRESETS.PRAISE_WORSHIP_MINISTRY_IMAGE_1.altText,
        },
      },
      {
        content: {
          contentKeys: ["MENS_MINISTRY", "MENS_MINISTRY_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.PURPLE_LEFT,
          image: IMAGE_PRESETS.MENS_MINISTRY_IMAGE_1.image,
          altText: IMAGE_PRESETS.MENS_MINISTRY_IMAGE_1.altText,
        },
      },
      {
        content: {
          contentKeys: ["WOMENS_MINISTRY", "WOMENS_MINISTRY_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.GREEN_RIGHT,
          image: IMAGE_PRESETS.WOMENS_MINISTRY_IMAGE_1.image,
          altText: IMAGE_PRESETS.WOMENS_MINISTRY_IMAGE_1.altText,
        },
      },
      {
        content: {
          contentKeys: ["YOUTH_MINISTRY", "YOUTH_MINISTRY_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.PURPLE_LEFT,
          image: IMAGE_PRESETS.YOUTH_MINISTRY_IMAGE_1.image,
          altText: IMAGE_PRESETS.YOUTH_MINISTRY_IMAGE_1.altText,
        },
      },
      {
        content: {
          contentKeys: ["CHILDREN_MINISTRY", "CHILDREN_MINISTRY_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.GREEN_RIGHT,
          image: IMAGE_PRESETS.CHILDREN_MINISTRY_IMAGE_1.image,
          altText: IMAGE_PRESETS.CHILDREN_MINISTRY_IMAGE_1.altText,
        },
      },
    ],
    MINISTRIES_CONTENT
  );
