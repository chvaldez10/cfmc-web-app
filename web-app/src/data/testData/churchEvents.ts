import { EventDataProps } from "@/types/supabaseTypes";

// Mocking data
export const upcomingEvents: EventDataProps[] = [
  {
    id: 1,
    name: "Sunday Service",
    startDate: new Date("2024-07-28T00:00:00"),
    endDate: new Date("2024-07-28T00:00:00"),
    tags: ["Sunday Service"],
    category: "Sunday Service",
    occurrence: "Weekly",
    description:
      "Join us for a Sunday Service at the church. The service will start at 2:00PM.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "419 Northmount Drive NW, Calgary, Alberta T2K 3H7 Canada",
    status: "Past",
    organizerName: "Calgary Filipino Methodist Church",
    slug: "sunday-service-20240728",
  },
  {
    id: 2,
    name: "Outdoor Worship Service",
    startDate: new Date("2024-08-11T10:00:00"),
    endDate: new Date("2024-08-11T17:00:00"),
    tags: ["Outdoor Worship Service", "Sunday Service"],
    category: "Outdoor Worship Service",
    occurrence: "One-time",
    description:
      "Join us for an outdoor worship service at the church. The service will start at 10:00AM. It is also a potluck.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "7305 Crowchild Trail SW, Calgary, AB T3E 5N5",
    status: "Upcoming",
    organizerName: "Calgary Filipino Methodist Church",
    slug: "outdoor-worship-service-20240811",
  },
  {
    id: 3,
    name: "September Potluck",
    startDate: new Date("2024-09-08T14:00:00"),
    endDate: new Date("2024-09-08T17:00:00"),
    tags: ["Potluck", "Sunday Service"],
    category: "Potluck",
    occurrence: "One-time",
    description:
      "Join us for a potluck after our Sunday Service. The potluck will start after the service.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "419 Northmount Drive NW, Calgary, Alberta T2K 3H7 Canada",
    status: "TBD",
    organizerName: "Calgary Filipino Methodist Church",
    slug: "potluck-20240908",
  },
];
