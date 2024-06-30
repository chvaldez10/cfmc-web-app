import { ReleaseData } from "@/types/releaseData";

export const releaseData: ReleaseData[] = [
  {
    year: 2024,
    releaseItems: [
      {
        version: "v 24.0.1",
        details: {
          date: "June 30, 2024",
          featureList: {
            "Supabase Integration": "Added authentication for admin use.",
            Design:
              "Reversed theming, changed landing page layout, created new hero sections, and added a navbar background.",
            Docker: "Added Docker for local development.",
          },
        },
      },
      {
        version: "v 24.0.0",
        details: {
          date: "June 11, 2024",
          featureList: {
            "🎉 First Official Release:":
              "Introduced a static page with routing, main header, several hero sections and cards, footer, and release page.",
            "📸 Featured Images:": "Selected featured images for the web page.",
            "📲 Mobile/Web:":
              "The web page can resize for both small and large screens.",
          },
        },
      },
    ],
  },
];
