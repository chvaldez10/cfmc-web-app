import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  aboutDropdownItems,
  mediaDropDownItems,
  getInvolvedDropdownItems,
  supperDropdownItem,
} from "@/data/navbar/navData";
import NavDropdown from "./NavDropdown";
import OpenModalButton from "@/components/core/buttons/OpenModalButton";

interface NavbarLinksProps {
  NavClassNames?: string | undefined;
  ButtonClassNames?: string | undefined;
}

export const NavbarLinks: FC<NavbarLinksProps> = ({
  NavClassNames = "",
  ButtonClassNames = "",
}) => {
  const router = useRouter();

  return (
    <ul
      className="div-outside-width md:flex-row md:justify-start  gap-3 lg:gap-5"
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
      {/* <PurplePillButtonClient
        variant="outline"
        className={`z-10 scale-up ${NavClassNames} ${ButtonClassNames}`}
        onClick={() => console.log("Tithes and Offering Modal")}
      >
        Tithes and Offering
      </PurplePillButtonClient> */}

      <OpenModalButton
        variant="outline"
        className={`z-10 scale-up ${NavClassNames} ${ButtonClassNames}`}
      >
        Tithes and Offering
      </OpenModalButton>
    </ul>
  );
};

export default NavbarLinks;
