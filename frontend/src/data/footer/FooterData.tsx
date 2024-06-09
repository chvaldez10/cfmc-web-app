import { ReactElement } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";

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
  {
    icon: <FaYahoo />,
    label: "Yahoo",
    url: "",
  },
];

export const usefulLinks = [
  {
    href: "/about/ministry",
    label: "Media Inquiries",
  },
  {
    href: "/media/about-us",
    label: "Media Inquiries",
  },
];

// const otherResources = [
//   {
//     href: "https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile",
//     label: "MIT License",
//   },
// ];
