import { AllowedColorSchemes } from "@/constants/shared/enums";
import type { TextBlock, AboutContentItem } from "@/types/ui/components";

export interface SectionData {
  title: string;
  textBlocks: TextBlock[];
  colorScheme: AllowedColorSchemes;
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
}

export interface SectionVisualConfig {
  colorScheme: AllowedColorSchemes;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export interface SectionConfig {
  content: {
    contentKeys: string[];
  };
  visual: SectionVisualConfig;
}

/**
 * Generates section data for StickyParallax components
 * Simplified to match your exact usage pattern
 */
export function generateSectionsData(
  sections: SectionConfig[],
  contentSource: Record<string, AboutContentItem>
): SectionData[] {
  return sections.map((section) => {
    const { content, visual } = section;

    // Generate text blocks from content keys
    const textBlocks: TextBlock[] = content.contentKeys.map((key) => ({
      text: contentSource[key].description,
      isQuote: contentSource[key].isQuote || false,
    }));

    // Title is always from the first content key
    const title = contentSource[content.contentKeys[0]].title;

    return {
      title,
      textBlocks,
      colorScheme: visual.colorScheme,
      reverse: visual.reverse,
      imageSrc: visual.imageSrc,
      imageAlt: visual.imageAlt,
    };
  });
}

/**
 * Preset configurations for common color schemes and patterns
 */
export const VISUAL_PRESETS = {
  PURPLE_LEFT: {
    colorScheme: AllowedColorSchemes.PURPLE,
    reverse: false,
  },
  PURPLE_RIGHT: {
    colorScheme: AllowedColorSchemes.PURPLE,
    reverse: true,
  },
  GREEN_LEFT: {
    colorScheme: AllowedColorSchemes.GREEN,
    reverse: false,
  },
  GREEN_RIGHT: {
    colorScheme: AllowedColorSchemes.GREEN,
    reverse: true,
  },
} as const;

/**
 * Gallery image presets for common images
 */
export const IMAGE_PRESETS = {
  COMMUNITY_GATHERING: {
    imageSrc: "/gallery/IMG_4523.JPG",
    imageAlt: "CFMC Community Gathering",
  },
  SERVICE_OUTREACH: {
    imageSrc: "/gallery/IMG_3790.jpg",
    imageAlt: "CFMC Service and Outreach",
  },
  WORSHIP_SERVICE: {
    imageSrc: "/gallery/IMG_4855.JPEG",
    imageAlt: "CFMC Worship Service",
  },
  FELLOWSHIP: {
    imageSrc: "/gallery/IMG_6559.JPEG",
    imageAlt: "CFMC Fellowship",
  },
  PRAYER_MINISTRY: {
    imageSrc: "/gallery/IMG_9061.JPEG",
    imageAlt: "CFMC Prayer and Ministry",
  },
} as const;
