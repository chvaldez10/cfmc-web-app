import { EventDataProps } from "@/types/supabaseTypes";

// There will be an events table
export const upcomingEvents: EventDataProps[] = [
  {
    id: 1,
    name: "Gospel of Mark Home Bible Study",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-08-01"),
    category: "bi-weekly",
    description:
      "Insert very very very very very very very very very very long description",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Church Basement",
    status: "upcoming",
    organizerName: "Calgary Filipino Methodist Church",
    slug: "gospel-of-mark-home-bible-study",
  },
  {
    id: 2,
    name: "It Takes Two to Tango",
    startDate: new Date("2024-08-08"),
    endDate: new Date("2024-08-09"),
    category: "bi-weekly",
    description: "Insert short description",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Main Hall",
    status: "upcoming",
    organizerName: "Calgary Filipino Methodist Church",
    slug: "it-takes-two-to-tango",
  },
  {
    id: 3,
    name: "Family Camp",
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-08-17"),
    category: "multiple days",
    description: "Description",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Campground",
    status: "upcoming",
    organizerName: "Spicy Rice",
    slug: "family-camp",
  },
  {
    id: 4,
    name: "Community Potluck",
    startDate: new Date("2024-08-22"),
    endDate: new Date("2024-08-22"),
    category: "monthly",
    description: "Join us for a community potluck dinner.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Church Hall",
    status: "upcoming",
    organizerName: "Rice Family",
    slug: "community-potluck",
  },
  {
    id: 5,
    name: "Youth Group Retreat",
    startDate: new Date("2024-08-29"),
    endDate: new Date("2024-08-31"),
    category: "retreat",
    description: "A weekend retreat for the youth group.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Mountain Lodge",
    status: "upcoming",
    organizerName: "Mochi Family",
    slug: "youth-group-retreat",
  },
  {
    id: 6,
    name: "Christmas Caroling",
    startDate: new Date("2024-08-31"),
    endDate: new Date("2024-08-31"),
    category: "seasonal",
    description: "Join us for a night of caroling in the neighborhood.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Church Parking Lot",
    status: "upcoming",
    organizerName: "Sushi Family",
    slug: "christmas-caroling",
  },
];
