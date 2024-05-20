import { FC } from "react";
import {
  aboutDropdownItems,
  getInvolvedDropdownItems,
  supperDropdownItem,
} from "./navbarData";
import NavbarLinkItems from "./NavbarLinkItems";
import NavDropdown from "./NavDropdown";
import PurplePillButton from "@/components/core/buttons/PurplePillButton";

export const NavbarLinks: FC = () => (
  <ul className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
    <NavDropdown navDropdownItems={aboutDropdownItems} dropdownLabel="About" />
    <NavbarLinkItems href="#" label="Media" />
    <NavDropdown
      navDropdownItems={getInvolvedDropdownItems}
      dropdownLabel="Get Involved"
    />
    <NavDropdown
      navDropdownItems={supperDropdownItem}
      dropdownLabel="Support"
    />
    <PurplePillButton
      text="Join Us Sunday"
      onClick={() => console.log("Join Us Sunday Clicked")}
      variant="filled"
    />
  </ul>
);

export default NavbarLinks;
