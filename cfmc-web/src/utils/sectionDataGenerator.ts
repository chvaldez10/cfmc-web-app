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
  image: string;
  altText: string;
  reverse?: boolean;
}

export interface SectionConfig {
  content: {
    contentKeys: string[];
  };
  visual: SectionVisualConfig;
}

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
      imageSrc: visual.image,
      imageAlt: visual.altText,
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
