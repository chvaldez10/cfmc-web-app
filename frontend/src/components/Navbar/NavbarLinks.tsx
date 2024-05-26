import { FC } from "react";
import {
  aboutDropdownItems,
  getInvolvedDropdownItems,
  mediaDropDownItems,
  supperDropdownItem,
} from "./navbarData";
import NavDropdown from "./NavDropdown";
import PurplePillButton from "@/components/core/buttons/PurplePillButton";
import { useRouter } from "next/navigation";

export const NavbarLinks: FC = () => {
  const router = useRouter();

  return (
    <ul className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
      <NavDropdown
        navDropdownItems={aboutDropdownItems}
        dropdownLabel="About"
      />
      <NavDropdown
        navDropdownItems={mediaDropDownItems}
        dropdownLabel="Media"
      />
      <NavDropdown
        navDropdownItems={getInvolvedDropdownItems}
        dropdownLabel="Get Involved"
      />
      <NavDropdown
        navDropdownItems={supperDropdownItem}
        dropdownLabel="Connect"
      />
      <PurplePillButton
        text="Tithes & Offering"
        onClick={() => router.push("/tithes-and-offering")}
        variant="filled"
        className="z-10 scale-up"
      />
    </ul>
  );
};

export default NavbarLinks;
