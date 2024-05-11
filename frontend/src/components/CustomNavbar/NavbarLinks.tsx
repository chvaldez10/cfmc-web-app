import { FC } from "react";
import NavbarLinkItems from "./NavbarLinkItems";
import AboutDropdown from "./AboutDropdown";

const navItems = [
  { href: "#", label: "About", isActive: true },
  { href: "#", label: "Services" },
  { href: "#", label: "Media" },
  { href: "#", label: "Calendar" },
];

export const NavbarLinks: FC = () => (
  <ul
    id="navbarLinks"
    className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
  >
    <AboutDropdown />
    {navItems.map((navItem, index) => (
      <NavbarLinkItems
        key={index}
        href={navItem.href}
        label={navItem.label}
        current={navItem.isActive}
      />
    ))}
  </ul>
);

export default NavbarLinks;
