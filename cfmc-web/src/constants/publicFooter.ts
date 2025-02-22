interface FooterItem {
  label: string;
  children?: Array<FooterItem>;
  href?: string;
}

export const FOOTER_ITEMS: Array<FooterItem> = [
  {
    label: "Resources",
    children: [
      {
        label: "Media",
        href: "/media",
      },
      {
        label: "Upcoming Events",
        href: "/events",
      },
      {
        label: "Ministries",
        href: "/ministries",
      },
    ],
  },
  {
    label: "Other Resources",
    children: [
      {
        label: "Documentation",
        href: "/documentation",
      },
      {
        label: "Github",
        href: "/github",
      },
    ],
  },
];

export const FOOTER_INQUIRIES: Array<{ label: string; description: string }> = [
  {
    label: "Connect with us",
    description: "Connect with us to get the latest news and updates.",
  },
  {
    label: "Prayer Request",
    description: "Prayer Request for the church and its members.",
  },
  {
    label: "Media Request",
    description: "Media Request for the church and its services.",
  },
];
