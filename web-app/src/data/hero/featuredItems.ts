import { ImageProps } from "@/types/genericTypes";
import { MinistryDetailCardProps } from "@/types/uiProps";

export const heroCollageImages: ImageProps[] = [
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/17.jpeg?t=2024-08-28T04%3A58%3A24.795Z",
    alt: "featured image 1",
    containerClassName: "col-span-1 row-span-1",
  },
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/1.jpeg?t=2024-08-28T04%3A58%3A24.795Z",
    alt: "featured image 2",
    containerClassName: "col-span-1 row-span-1 ",
  },
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/8.jpeg?t=2024-08-28T05%3A00%3A21.192Z",
    alt: "featured image 3",
    containerClassName: "col-span-1 row-span-1 hidden lg:block",
  },
];

export const ministryDetailCards: MinistryDetailCardProps[] = [
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/3.jpg?t=2024-08-28T05%3A13%3A09.072Z",
    alt: "Holy Communion",
    url: "/about/ministry",
    title: "Holy Communion",
    description:
      "Holy Communion is a reminder of Christ's sacrifice. We conduct this during the first Sunday of the month.",
    dataTestId: "ministry-detail-card-holy-communion",
  },
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/1.jpg?t=2024-08-28T05%3A16%3A31.399Z",
    title: "Fellowship",
    alt: "Fellowship",
    description:
      "We have different groups for various ages: kids, youth, and adults. We hold outdoor services during the summer.",
    url: "/about/ministry",
    dataTestId: "ministry-detail-card-fellowship",
  },
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/3.jpeg?t=2024-08-28T05%3A16%3A58.143Z",
    title: "Get Involved",
    alt: "Get Involved",
    description:
      "There are many ways to get involved. We always need help setting up Sunday worship. We look for people to hold Bible Study throughout the week. Lastly, our music and multimedia team always welcomes new members.",
    url: "/get-involved/music",
    dataTestId: "ministry-detail-card-get-involved",
  },
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/header/14.jpeg?t=2024-08-28T05%3A17%3A14.837Z",
    title: "New Member",
    alt: "New Member",
    description:
      "Come join us in one of our services, fellowships, or ministries.",
    url: "/get-involved/bible-study",
    dataTestId: "ministry-detail-card-new-member",
  },
];

export const communityBuilding1: ImageProps[] = [
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/community_building/1.jpg?t=2024-08-28T05%3A35%3A16.546Z",
    alt: "community building 1",
  },
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/community_building/2.jpg",
    alt: "community building 2",
  },
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/community_building/3.jpg?t=2024-08-28T05%3A35%3A41.497Z",
    alt: "community building 3",
  },
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/community_building/3.jpg?t=2024-08-28T05%3A35%3A41.497Z",
    alt: "community building 4",
  },
];

export const ministryImages1: ImageProps[] = [
  {
    src: "https://skdambngwkjvsmkhgswi.supabase.co/storage/v1/object/public/images/ministry/1.jpg?t=2024-08-28T05%3A38%3A14.426Z",
    alt: "ministry 1",
  },
];
