import { ReleaseData } from "@/types/releaseData";

// Note: This is just for testing purposes. This data structure does not reflect the database structure.
export const releaseData: ReleaseData[] = [
  {
    year: 2024,
    releaseItems: [
      {
        version: "v 24.0.3",
        details: {
          date: "August 11, 2024",
          featureList: {
            "🧑‍🍳 Fresh out the oven":
              "Working backend server! Mocked a few pages.",
            "🐛 Bug fixes and improvements": "Fix build and linting errors.",
            "⏭️ Up next": "More UI components and features to come.",
          },
        },
      },
      {
        version: "v 24.0.2",
        details: {
          date: "August 4, 2024",
          featureList: {
            "🧑‍🍳 Fresh out the oven":
              "Announcement page and new UI components such as modals, event cards, verse of the day, and more.",
            "🐛 Bug fixes and improvements":
              "Fixed broken layouts for mobile and tablet, and improved spacing.",
            "⏭️ Up next":
              "Working backend server! More UI components and features to come.",
          },
        },
      },
      {
        version: "v 24.0.1",
        details: {
          date: "June 30, 2024",
          featureList: {
            "⚡ Supabase Integration": "Added authentication for admin use.",
            "🖼️ Design":
              "Reversed theming, changed landing page layout, created new hero sections, and added a navbar background.",
            "🐋 Docker": "Added Docker for local development.",
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
