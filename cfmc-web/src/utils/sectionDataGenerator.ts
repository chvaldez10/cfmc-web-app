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

export interface SectionContentConfig {
  title?: string; // Optional override for the title
  contentKeys: string[]; // Keys from ABOUT_CONTENT or other content sources
  customContent?: AboutContentItem[]; // Custom content not from ABOUT_CONTENT
}

export interface SectionConfig {
  content: SectionContentConfig;
  visual: SectionVisualConfig;
}

/**
 * Generates section data for StickyParallax components
 *
 * @param sections - Array of section configurations
 * @param contentSource - Source object for content (e.g., ABOUT_CONTENT, MISSION_CONTENT)
 * @returns Array of SectionData for use with StickyParallax
 */
export function generateSectionsData(
  sections: SectionConfig[],
  contentSource: Record<string, AboutContentItem>
): SectionData[] {
  return sections.map((section) => {
    const { content, visual } = section;

    // Generate text blocks from content keys and custom content
    const textBlocks: TextBlock[] = [];

    // Add content from keys
    content.contentKeys.forEach((key) => {
      const contentItem = contentSource[key];
      if (contentItem) {
        textBlocks.push({
          text: contentItem.description,
          isQuote: contentItem.isQuote || false,
        });
      }
    });

    // Add custom content
    if (content.customContent) {
      content.customContent.forEach((item) => {
        textBlocks.push({
          text: item.description,
          isQuote: item.isQuote || false,
        });
      });
    }

    // Determine the title
    const title =
      content.title ||
      (content.contentKeys.length > 0
        ? contentSource[content.contentKeys[0]]?.title
        : "Untitled");

    return {
      title: title || "Untitled",
      textBlocks,
      colorScheme: visual.colorScheme,
      reverse: visual.reverse,
      imageSrc: visual.imageSrc,
      imageAlt: visual.imageAlt,
    };
  });
}

/**
 * Quick generator for simple sections with single content items
 */
export function generateSimpleSections(
  configs: Array<{
    contentKey: string;
    visual: SectionVisualConfig;
    titleOverride?: string;
  }>,
  contentSource: Record<string, AboutContentItem>
): SectionData[] {
  return generateSectionsData(
    configs.map((config) => ({
      content: {
        contentKeys: [config.contentKey],
        title: config.titleOverride,
      },
      visual: config.visual,
    })),
    contentSource
  );
}

/**
 * Merges multiple content sources into a single object
 * Useful when you need content from multiple files (e.g., ABOUT_CONTENT + MISSION_CONTENT)
 *
 * @param sources - Array of content source objects to merge
 * @returns Merged content object
 */
export function mergeContentSources(
  ...sources: Record<string, AboutContentItem>[]
): Record<string, AboutContentItem> {
  return Object.assign({}, ...sources);
}

/**
 * Generator for sections with mixed content sources
 * Each section can specify its own content source
 */
export interface SectionConfigWithSource {
  content: SectionContentConfig;
  visual: SectionVisualConfig;
  contentSource: Record<string, AboutContentItem>;
}

export function generateSectionsFromMultipleSources(
  sections: SectionConfigWithSource[]
): SectionData[] {
  return sections.map((section) => {
    const { content, visual, contentSource } = section;

    // Generate text blocks from content keys and custom content
    const textBlocks: TextBlock[] = [];

    // Add content from keys
    content.contentKeys.forEach((key) => {
      const contentItem = contentSource[key];
      if (contentItem) {
        textBlocks.push({
          text: contentItem.description,
          isQuote: contentItem.isQuote || false,
        });
      }
    });

    // Add custom content
    if (content.customContent) {
      content.customContent.forEach((item) => {
        textBlocks.push({
          text: item.description,
          isQuote: item.isQuote || false,
        });
      });
    }

    // Determine the title
    const title =
      content.title ||
      (content.contentKeys.length > 0
        ? contentSource[content.contentKeys[0]]?.title
        : "Untitled");

    return {
      title: title || "Untitled",
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
