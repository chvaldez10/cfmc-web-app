import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  aboutDropdownItems,
  mediaDropDownItems,
  getInvolvedDropdownItems,
  connectDropdownItem,
} from "@/data/navbar/navData";
import NavDropdown from "./NavDropdown";
import { OpenModalButton } from "@/components/core/ui";
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
      className="div-outside-width md:flex-row md:justify-start gap-1 lg:gap-5"
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
        title="Tithes & Offering"
        modalElement={
          <TithesAndOffering description={tithesAndOfferingVerse} />
        }
      >
        Tithes & Offering
      </OpenModalButton>
    </ul>
  );
};

export default NavbarLinks;
