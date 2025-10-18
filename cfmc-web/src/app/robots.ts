import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

/**
 * Robots.txt configuration
 * Controls which pages search engines can crawl
 *
 * To update blocked paths, edit ROBOTS.DISALLOW_PATHS in seo.config.ts
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [...SEO_CONFIG.ROBOTS.DISALLOW_PATHS],
      },
    ],
    sitemap: `${SEO_CONFIG.BASE_URL}/sitemap.xml`,
  };
}
