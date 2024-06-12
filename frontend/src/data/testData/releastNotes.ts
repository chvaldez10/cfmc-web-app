// This will be a table

interface Features {
  [key: string]: string;
}

interface ReleaseDetails {
  date: string;
  version: string;
  features: Features;
}

interface ReleaseData {
  year: number;
  details: ReleaseDetails;
}

export const releaseData: ReleaseData[] = [
  {
    year: 2024,
    details: {
      date: "June 16, 2024",
      version: "2024.06.09",
      features: {
        "First Release:": "description 1",
        "Front Page:": "description 2",
      },
    },
  },
  {
    year: 2023,
    details: {
      date: "test",
      version: "test.test",
      features: {
        "First Release:": "test 1",
        "Front Page:": "test 2",
      },
    },
  },
];
