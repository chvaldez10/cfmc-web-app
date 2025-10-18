import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

/**
 * Sitemap configuration
 * Lists all pages for search engine crawling
 *
 * To add/remove pages, update the routes array below
 * Priority values: 1.0 (highest) to 0.1 (lowest)
 *
 * Change frequency options:
 * - "always" - Changes constantly
 * - "hourly" - Changes every hour
 * - "daily" - Changes daily
 * - "weekly" - Changes weekly
 * - "monthly" - Changes monthly
 * - "yearly" - Changes yearly
 * - "never" - Archived/static content
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const { BASE_URL } = SEO_CONFIG;
  const { HIGH_PRIORITY, MEDIUM_PRIORITY, LOW_PRIORITY, DEFAULT_CHANGE_FREQ } =
    SEO_CONFIG.SITEMAP;

  // Static routes with priority and change frequency
  const routes: MetadataRoute.Sitemap = [
    // Home page - highest priority, updated weekly
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    // About section - high priority, updated monthly
    {
      url: `${BASE_URL}/about/mission-vision`,
      lastModified: new Date(),
      changeFrequency: DEFAULT_CHANGE_FREQ,
      priority: HIGH_PRIORITY,
    },
    {
      url: `${BASE_URL}/about/beliefs`,
      lastModified: new Date(),
      changeFrequency: DEFAULT_CHANGE_FREQ,
      priority: MEDIUM_PRIORITY,
    },
    {
      url: `${BASE_URL}/about/history`,
      lastModified: new Date(),
      changeFrequency: DEFAULT_CHANGE_FREQ,
      priority: MEDIUM_PRIORITY,
    },
    {
      url: `${BASE_URL}/about/leadership`,
      lastModified: new Date(),
      changeFrequency: DEFAULT_CHANGE_FREQ,
      priority: MEDIUM_PRIORITY,
    },

    // Get Involved section - high priority
    {
      url: `${BASE_URL}/get-involved/ministries`,
      lastModified: new Date(),
      changeFrequency: DEFAULT_CHANGE_FREQ,
      priority: HIGH_PRIORITY,
    },
    {
      url: `${BASE_URL}/get-involved/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: HIGH_PRIORITY,
    },

    // Church Media section - medium to low priority
    {
      url: `${BASE_URL}/church-media/announcements`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: MEDIUM_PRIORITY,
    },
    {
      url: `${BASE_URL}/church-media/inquiry`,
      lastModified: new Date(),
      changeFrequency: DEFAULT_CHANGE_FREQ,
      priority: LOW_PRIORITY,
    },

    // Contact page - medium priority
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: DEFAULT_CHANGE_FREQ,
      priority: MEDIUM_PRIORITY,
    },
  ];

  return routes;
}
