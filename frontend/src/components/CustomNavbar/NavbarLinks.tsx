import { FC } from "react";
import NavbarLinkItems from "./NavbarLinkItems";
import NavDropdown from "./NavDropdown";

const navItems = [
  { href: "#", label: "Media" },
  { href: "#", label: "Contact Us" },
];

export const NavbarLinks: FC = () => (
  <ul
    id="navbarLinks"
    className="flex flex-col font-medium md:space-x-8 rtl:space-x-reverse md:flex-row"
  >
    <NavDropdown />
    {navItems.map((navItem, index) => (
      <NavbarLinkItems key={index} href={navItem.href} label={navItem.label} />
    ))}
  </ul>
);

export default NavbarLinks;
