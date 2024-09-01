import { ReleaseData } from "@/types/releaseData";

// Note: This is just for testing purposes. This data structure does not reflect the database structure.
export const releaseData: ReleaseData[] = [
  {
    year: 2024,
    releaseItems: [
      {
        version: "v 24.0.4",
        details: {
          date: "August 31, 2024",
          featureList: {
            "🧑‍🍳 Fresh out of the oven":
              "More pages and UI components. New tables",
            "🐛 Bug fixes and improvements": "Bug fixes and improvements",
            "⏭️ Up next": "More pages and UI components. Working forms.",
          },
        },
      },
      {
        version: "v 24.0.3",
        details: {
          date: "August 11, 2024",
          featureList: {
            "🧑‍🍳 Fresh out of the oven":
              "Working backend server! New pages and UI components.",
            "🐛 Bug fixes and improvements":
              "Fixed build and linting errors. Updated schema.",
            "⏭️ Up next": "More pages and UI components. Working forms.",
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
            "🧑‍🍳 Fresh out the oven":
              "Added authentication for admin use. New hero sections, and added a navbar background. Docker for local development.",
            "🐛 Bug fixes and improvements":
              "Reversed theming, changed landing page layout.",
            "⏭️ Up next": "New pages and UI components.",
          },
        },
      },
      {
        version: "v 24.0.0",
        details: {
          date: "June 11, 2024",
          featureList: {
            "🧑‍🍳 Fresh out the oven":
              "🎉 First Official Release. Introduced a static page with routing, main header, several hero sections and cards, footer, and release page.",
            "🐛 Bug fixes and improvements": "",
            "⏭️ Up next": "Improve navbar and add more pages.",
          },
        },
      },
    ],
  },
];
