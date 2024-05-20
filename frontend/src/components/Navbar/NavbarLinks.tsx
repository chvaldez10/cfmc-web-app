import { FC } from "react";
import {
  aboutDropdownItems,
  getInvolvedDropdownItems,
  supperDropdownItem,
} from "./navbarData";
import NavbarLinkItems from "./NavbarLinkItems";
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
      <NavbarLinkItems href="/media" label="Media" />
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
        onClick={() => router.push("/sunday-service")}
        variant="filled"
      />
    </ul>
  );
};

export default NavbarLinks;
