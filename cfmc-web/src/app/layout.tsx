import type { Metadata } from "next";
import { Providers } from "./provider";
import { fonts } from "./fonts";
import { SEO_CONFIG } from "@/config/seo.config";

/**
 * Root layout metadata
 * This is the base metadata for the entire site
 *
 * To update site-wide SEO settings, edit src/config/seo.config.ts
 */
export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.BASE_URL),
  title: {
    default: SEO_CONFIG.DEFAULT_TITLE,
    template: `%s | ${SEO_CONFIG.SITE_NAME_SHORT}`,
  },
  description: SEO_CONFIG.DEFAULT_DESCRIPTION,
  keywords: [
    ...SEO_CONFIG.DEFAULT_KEYWORDS,
    "Filipino community Calgary",
    "worship services Calgary",
  ],
  authors: [{ name: SEO_CONFIG.SITE_NAME }],
  creator: SEO_CONFIG.SITE_NAME,
  publisher: SEO_CONFIG.SITE_NAME,
  openGraph: {
    title: SEO_CONFIG.DEFAULT_TITLE,
    description: SEO_CONFIG.DEFAULT_DESCRIPTION,
    url: SEO_CONFIG.BASE_URL,
    siteName: SEO_CONFIG.SITE_NAME,
    images: [
      {
        url: SEO_CONFIG.DEFAULT_OG_IMAGE,
        width: SEO_CONFIG.DEFAULT_OG_IMAGE_WIDTH,
        height: SEO_CONFIG.DEFAULT_OG_IMAGE_HEIGHT,
        alt: `${SEO_CONFIG.SITE_NAME} Community`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.DEFAULT_TITLE,
    description: SEO_CONFIG.DEFAULT_DESCRIPTION,
    images: [SEO_CONFIG.DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={fonts.roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
