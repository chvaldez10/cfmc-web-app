import { ReactElement } from "react";
import { FaFacebook } from "react-icons/fa";

export const socialPlatforms: {
  icon: ReactElement;
  label: string;
  url: string;
}[] = [
  {
    icon: <FaFacebook />,
    label: "Facebook",
    url: "https://www.facebook.com/share/2BYMGfpPUgVrQPJh/?mibextid=LQQJ4d",
  },
];

export const usefulLinks: {
  link: string;
  label: string;
}[] = [
  {
    link: "/media/inquiries",
    label: "Media Inquiries",
  },
  {
    link: "/get-involved/upcoming",
    label: "Upcoming Events",
  },
  {
    link: "/about-us/ministry",
    label: "Ministry",
  },
];

export const otherResources: {
  link: string;
  label: string;
}[] = [
  {
    link: "/resources/release-notes",
    label: "Release Notes",
  },
  {
    link: "https://github.com/chvaldez10/cfmc-landing-page.git",
    label: "GitHub",
  },
  {
    link: "/login",
    label: "Admin Login",
  },
  {
    link: "/connect/forum",
    label: "Forum",
  },
];
