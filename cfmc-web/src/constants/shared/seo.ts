import { Branding } from "./enums";

/**
 * SEO-specific constants
 * Uses existing Branding constants where possible
 */

// Base URL - Use www. subdomain for consistency
export const SEO_BASE_URL = "https://www.calgaryfilipinomethodistchurch.ca";

// Default descriptions for SEO
export const SEO_DESCRIPTIONS = {
  DEFAULT:
    "Calgary Filipino Methodist Church - A welcoming Christian community in Calgary, Alberta. Join us for worship, ministries, and fellowship.",
  CHURCH_LONG:
    "A welcoming Christian community in Calgary, Alberta serving the Filipino community and beyond through worship, ministries, and fellowship.",
} as const;

// Default keywords that appear on all pages
export const SEO_DEFAULT_KEYWORDS = [
  Branding.CHURCH_NAME,
  Branding.CHURCH_NAME_ABBREVIATION,
  "Filipino church Calgary",
  "Methodist church Calgary",
  "Christian community Calgary",
] as const;

// Open Graph / Social Media
export const SEO_OG_CONFIG = {
  DEFAULT_IMAGE: "/gallery/IMG_4523.JPG",
  IMAGE_WIDTH: 1200,
  IMAGE_HEIGHT: 630,
  LOGO_PATH: "/branding/logo.svg",
} as const;

// Church location for structured data
export const SEO_LOCATION = {
  LOCALITY: "Calgary",
  REGION: "AB",
  COUNTRY: "CA",
  // Extract from existing Branding constants
  STREET_ADDRESS: Branding.CHURCH_ADDRESS.split(",")[0], // "419 Northmount Dr NW"
  POSTAL_CODE: Branding.CHURCH_POSTAL_CODE,
} as const;

// Social media links (using existing where available)
export const SEO_SOCIAL_MEDIA = [
  Branding.CHURCH_FACEBOOK_URL,
  // Add more as they become available:
  // "https://instagram.com/cfmc",
  // "https://twitter.com/cfmc",
] as const;

// Robots.txt configuration
export const SEO_ROBOTS_DISALLOW = [
  "/api/",
  "/dashboard/",
  "/sign-in/",
  "/sign-up/",
] as const;

// Sitemap priorities
export const SEO_SITEMAP_PRIORITIES = {
  HIGH: 0.9,
  MEDIUM: 0.8,
  LOW: 0.6,
  DEFAULT_CHANGE_FREQ: "monthly" as const,
} as const;
