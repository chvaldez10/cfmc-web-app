import {
  generateSectionsData,
  VISUAL_PRESETS,
  SectionData,
} from "@/utils/sectionDataGenerator";
import { ABOUT_CONTENT } from "@/constants/shared/about";
import { IMAGE_PRESETS } from "@/constants/gallery";

/**
 * Option 2: Next.js Built-in Caching
 *
 * How it works:
 * 1. This runs ONCE at module load time (build time in production)
 * 2. Next.js bundles the result into the final JavaScript
 * 3. No runtime processing - just importing a pre-computed constant
 * 4. Perfect for static content that never changes
 *
 * Performance: ⚡ Instant (no runtime processing)
 * Memory: ✅ Efficient (only final data exists)
 * Caching: 🏗️ Handled by Next.js bundler
 */
export const MISSION_VISION_STICKY_PARALLAX_SECTIONS: readonly SectionData[] =
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
