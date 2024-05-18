import { FC } from "react";
import NavbarLinkItems from "./NavbarLinkItems";
import NavDropdown from "./NavDropdown";
import PurplePillButton from "@/components/core/buttons/PurplePillButton";

const navDropdownItems: string[] = [
  "⛪ Ministry",
  "📖 Our Mission",
  "📜 Board",
  "👥 Community",
];

const getInvolvedDropdownItems: string[] = [
  "📩 Give",
  "🗓️ Upcoming",
  "🖥️ Multimedia",
  "🎶 Music",
];

export const NavbarLinks: FC = () => (
  <ul
    id="navbarLinks"
    className="flex flex-col font-medium md:space-x-8 rtl:space-x-reverse md:flex-row items-center"
  >
    <NavDropdown items={navDropdownItems} label="About" />
    <NavbarLinkItems href="#" label="Media" />
    <NavDropdown items={getInvolvedDropdownItems} label="Get Involved" />
    <NavbarLinkItems href="#" label="Contact Us" />
    <PurplePillButton
      text="Join Us Sunday"
      onClick={() => console.log("Join Us Sunday Clicked")}
      variant="filled"
    />
  </ul>
);

export default NavbarLinks;
