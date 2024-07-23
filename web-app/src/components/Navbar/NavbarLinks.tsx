import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  aboutDropdownItems,
  mediaDropDownItems,
  getInvolvedDropdownItems,
  connectDropdownItem,
} from "@/data/navbar/navData";
import NavDropdown from "./NavDropdown";
import OpenModalButton from "@/components/core/buttons/OpenModalButton";
import TithesAndOffering from "@/components/core/modals/atoms/TithesAndOffering";
import { tithesAndOfferingVerse } from "@/data/hero/constants";

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
        navDropdownItems={connectDropdownItem}
        dropdownLabel="Connect"
        className={NavClassNames}
      />

      <OpenModalButton
        variant="outline"
        className={`z-10 scale-up ${NavClassNames} ${ButtonClassNames}`}
        title="Tithes and Offering"
        modalElement={
          <TithesAndOffering description={tithesAndOfferingVerse} />
        }
      >
        Tithes and Offering
      </OpenModalButton>
    </ul>
  );
};

export default NavbarLinks;
