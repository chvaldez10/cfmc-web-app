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
