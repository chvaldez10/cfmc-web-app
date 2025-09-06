import {
  generateSectionsData,
  VISUAL_PRESETS,
} from "@/utils/sectionDataGenerator";
import { MINISTRIES_CONTENT } from "@/constants/ministries";
import { IMAGE_PRESETS } from "@/constants/gallery";
import { SectionData } from "@/types/ui/components";

export const MINISTRIES_STICKY_PARALLAX_SECTIONS: readonly SectionData[] =
  generateSectionsData(
    [
      {
        content: {
          contentKeys: ["DISCIPLESHIP_MINISTRY", "DISCIPLESHIP_MINISTRY_QUOTE"],
        },
        visual: {
          ...VISUAL_PRESETS.PURPLE_LEFT,
          image: IMAGE_PRESETS.GROUP_PIC_KURIAKOS_2025_2.image,
          altText: IMAGE_PRESETS.GROUP_PIC_KURIAKOS_2025_2.altText,
        },
      },
      {
        content: {
          contentKeys: ["CHILDREN_MINISTRY", "CHILDREN_MINISTRY_QUOTE"],
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
