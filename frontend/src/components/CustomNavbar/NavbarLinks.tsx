import { FC } from "react";
import NavbarLinkItems from "./NavbarLinkItems";
import NavDropdown from "./NavDropdown";

const navDropdownItems: string[] = [
  "Ministry",
  "Our Mission",
  "Community",
  "Contact Us",
];

const getInvolvedDropdownItems: string[] = [
  "Ministry",
  "Our Mission",
  "Community",
  "Contact Us",
];

export const NavbarLinks: FC = () => (
  <ul
    id="navbarLinks"
    className="flex flex-col font-medium md:space-x-8 rtl:space-x-reverse md:flex-row"
  >
    <NavDropdown items={navDropdownItems} label="About" />
    <NavbarLinkItems href="#" label="Media" />
    <NavDropdown items={getInvolvedDropdownItems} label="Get Involved" />
    <NavbarLinkItems href="#" label="Contact Us" />
  </ul>
);

export default NavbarLinks;
