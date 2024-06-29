import { FC } from "react";
import {
  aboutDropdownItems,
  mediaDropDownItems,
  getInvolvedDropdownItems,
  supperDropdownItem,
} from "@/data/navbar/navData";
import NavDropdown from "./NavDropdown";
import PurplePillButton from "@/components/core/buttons/PurplePillButton";
import { useRouter } from "next/navigation";

interface NavbarLinksProps {
  NavClassNames?: string;
  ButtonClassNames?: string;
}

export const NavbarLinks: FC<NavbarLinksProps> = ({
  NavClassNames = "",
  ButtonClassNames = "",
}) => {
  const router = useRouter();

  return (
    <ul
      className="flex flex-col md:flex-row items-center justify-center md:justify-start  gap-3 lg:gap-5"
      id="NavbarLinks"
    >
      <NavDropdown
        navDropdownItems={aboutDropdownItems}
        dropdownLabel="About"
        className={NavClassNames}
      />
      <NavDropdown
        navDropdownItems={mediaDropDownItems}
        dropdownLabel="Media"
        className={NavClassNames}
      />
      <NavDropdown
        navDropdownItems={getInvolvedDropdownItems}
        dropdownLabel="Get Involved"
        className={NavClassNames}
      />
      <NavDropdown
        navDropdownItems={supperDropdownItem}
        dropdownLabel="Connect"
        className={NavClassNames}
      />
      <PurplePillButton
        onClick={() => router.push("/tithes-and-offering")}
        variant="outline"
        className={`z-10 scale-up ${NavClassNames} ${ButtonClassNames}`}
      >
        Tithes and Offering
      </PurplePillButton>
    </ul>
  );
};

export default NavbarLinks;
