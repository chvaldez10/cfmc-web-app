import { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Generates consistent metadata for pages across the application
 *
 * @param title - Page title (will be appended with " | CFMC")
 * @param description - Page description for meta tags
 * @param path - URL path (e.g., "/about/mission-vision")
 * @param keywords - Additional keywords specific to this page
 * @param ogImage - Custom Open Graph image (defaults to site default)
 * @param noIndex - Set to true to prevent search engine indexing
 *
 * @example
 * export const metadata = generatePageMetadata({
 *   title: "About Us",
 *   description: "Learn about our church",
 *   path: "/about",
 *   keywords: ["church history", "community"],
 * });
 */
export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = SEO_CONFIG.DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataProps): Metadata {
  const url = `${SEO_CONFIG.BASE_URL}${path}`;

  return {
    title,
    description,
    keywords: [...SEO_CONFIG.DEFAULT_KEYWORDS, ...keywords],
    openGraph: {
      title: `${title} | ${SEO_CONFIG.SITE_NAME_SHORT}`,
      description,
      url,
      siteName: SEO_CONFIG.SITE_NAME,
      images: [
        {
          url: ogImage,
          width: SEO_CONFIG.DEFAULT_OG_IMAGE_WIDTH,
          height: SEO_CONFIG.DEFAULT_OG_IMAGE_HEIGHT,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SEO_CONFIG.SITE_NAME_SHORT}`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

/**
 * Generates JSON-LD structured data for a Church organization
 *
 * This adds structured data to help search engines understand
 * your church's information. Update church details in seo.config.ts
 *
 * @returns Schema.org Church structured data
 */
export function generateChurchSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Church",
    name: SEO_CONFIG.CHURCH_INFO.name,
    alternateName: SEO_CONFIG.CHURCH_INFO.alternateName,
    description: SEO_CONFIG.CHURCH_INFO.description,
    url: SEO_CONFIG.BASE_URL,
    logo: `${SEO_CONFIG.BASE_URL}${SEO_CONFIG.LOGO_PATH}`,
    image: `${SEO_CONFIG.BASE_URL}${SEO_CONFIG.DEFAULT_OG_IMAGE}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO_CONFIG.CHURCH_INFO.address.locality,
      addressRegion: SEO_CONFIG.CHURCH_INFO.address.region,
      addressCountry: SEO_CONFIG.CHURCH_INFO.address.country,
    },
    sameAs: SEO_CONFIG.CHURCH_INFO.socialMedia,
  };
}

/**
 * Generates JSON-LD structured data for an Event
 *
 * Use this for individual event pages to provide rich search results
 *
 * @example
 * const eventSchema = generateEventSchema({
 *   name: "Sunday Worship Service",
 *   description: "Join us for worship",
 *   startDate: "2024-01-01T10:00:00",
 *   endDate: "2024-01-01T11:30:00",
 * });
 */
export function generateEventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    endDate,
    location: location
      ? {
          "@type": "Place",
          name: location,
          address: {
            "@type": "PostalAddress",
            addressLocality: SEO_CONFIG.CHURCH_INFO.address.locality,
            addressRegion: SEO_CONFIG.CHURCH_INFO.address.region,
            addressCountry: SEO_CONFIG.CHURCH_INFO.address.country,
          },
        }
      : {
          "@type": "Place",
          name: SEO_CONFIG.CHURCH_INFO.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: SEO_CONFIG.CHURCH_INFO.address.locality,
            addressRegion: SEO_CONFIG.CHURCH_INFO.address.region,
            addressCountry: SEO_CONFIG.CHURCH_INFO.address.country,
          },
        },
    image: image || `${SEO_CONFIG.BASE_URL}${SEO_CONFIG.DEFAULT_OG_IMAGE}`,
    organizer: {
      "@type": "Church",
      name: SEO_CONFIG.CHURCH_INFO.name,
      url: SEO_CONFIG.BASE_URL,
    },
  };
}

/**
 * Generates JSON-LD structured data for breadcrumbs
 *
 * Helps search engines understand your site's navigation structure
 *
 * @param items - Array of breadcrumb items with name and URL
 * @example
 * const breadcrumbs = generateBreadcrumbSchema([
 *   { name: "Home", url: "/" },
 *   { name: "About", url: "/about" },
 * ]);
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.BASE_URL}${item.url}`,
    })),
  };
}
