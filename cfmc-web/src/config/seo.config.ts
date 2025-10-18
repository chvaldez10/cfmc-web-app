import { Branding } from "@/constants/shared/enums";
import * as SEO from "@/constants/shared/seo";

/**
 * SEO Configuration
 *
 * Centralized configuration for all SEO-related settings.
 * Most values are imported from @constants/shared/seo.ts
 *
 * To update:
 * - Domain/Church info: Edit @constants/shared/seo.ts
 * - Branding: Edit @constants/shared/enums.ts (Branding enum)
 */

export const SEO_CONFIG = {
  // Base URL - includes www. subdomain
  BASE_URL: SEO.SEO_BASE_URL,

  // Site Information (from existing Branding constants)
  SITE_NAME: Branding.CHURCH_NAME,
  SITE_NAME_SHORT: Branding.CHURCH_NAME_ABBREVIATION,

  // Default Meta Information
  DEFAULT_TITLE: `${Branding.CHURCH_NAME} | ${Branding.CHURCH_NAME_ABBREVIATION}`,
  DEFAULT_DESCRIPTION: SEO.SEO_DESCRIPTIONS.DEFAULT,

  // Default Open Graph Image (relative path from public folder)
  DEFAULT_OG_IMAGE: SEO.SEO_OG_CONFIG.DEFAULT_IMAGE,
  DEFAULT_OG_IMAGE_WIDTH: SEO.SEO_OG_CONFIG.IMAGE_WIDTH,
  DEFAULT_OG_IMAGE_HEIGHT: SEO.SEO_OG_CONFIG.IMAGE_HEIGHT,

  // Logo path (relative path from public folder)
  LOGO_PATH: SEO.SEO_OG_CONFIG.LOGO_PATH,

  // Default Keywords (appear on all pages)
  DEFAULT_KEYWORDS: [...SEO.SEO_DEFAULT_KEYWORDS],

  // Church Information (for structured data)
  CHURCH_INFO: {
    name: Branding.CHURCH_NAME,
    alternateName: Branding.CHURCH_NAME_ABBREVIATION,
    description: SEO.SEO_DESCRIPTIONS.CHURCH_LONG,
    address: {
      locality: SEO.SEO_LOCATION.LOCALITY,
      region: SEO.SEO_LOCATION.REGION,
      country: SEO.SEO_LOCATION.COUNTRY,
      streetAddress: SEO.SEO_LOCATION.STREET_ADDRESS,
      postalCode: SEO.SEO_LOCATION.POSTAL_CODE,
    },
    socialMedia: [...SEO.SEO_SOCIAL_MEDIA],
    phone: Branding.CHURCH_PHONE_NUMBER,
    email: Branding.CHURCH_EMAIL,
  },

  // Robots Configuration
  ROBOTS: {
    DISALLOW_PATHS: [...SEO.SEO_ROBOTS_DISALLOW],
  },

  // Sitemap Configuration
  SITEMAP: {
    DEFAULT_CHANGE_FREQ: SEO.SEO_SITEMAP_PRIORITIES.DEFAULT_CHANGE_FREQ,
    HIGH_PRIORITY: SEO.SEO_SITEMAP_PRIORITIES.HIGH,
    MEDIUM_PRIORITY: SEO.SEO_SITEMAP_PRIORITIES.MEDIUM,
    LOW_PRIORITY: SEO.SEO_SITEMAP_PRIORITIES.LOW,
  },
} as const;
