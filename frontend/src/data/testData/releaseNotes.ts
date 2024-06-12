interface FeatureList {
  [key: string]: string;
}

interface Features {
  date: string;
  featureList: FeatureList;
}

interface ReleaseDetails {
  version: string;
  details: Features;
}

interface ReleaseData {
  year: number;
  releaseItems: ReleaseDetails[];
}

export const releaseData: ReleaseData[] = [
  {
    year: 2024,
    releaseItems: [
      {
        version: "2024.06.09",
        details: {
          date: "June 16, 2024",
          featureList: {
            "First Release:": "description 1",
            "Front Page:": "description 2",
          },
        },
      },
      {
        version: "2024.07.10",
        details: {
          date: "July 20, 2024",
          featureList: {
            "Second Release:": "description 3",
            "Dashboard:": "description 4",
          },
        },
      },
    ],
  },
  {
    year: 2025,
    releaseItems: [
      {
        version: "2025.01.15",
        details: {
          date: "January 15, 2025",
          featureList: {
            "First Release of 2025:": "description 5",
            "Profile Page:": "description 6",
          },
        },
      },
    ],
  },
];
