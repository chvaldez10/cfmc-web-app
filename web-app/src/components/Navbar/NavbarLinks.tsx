import { FC } from "react";
import {
  aboutDropdownItems,
  mediaDropDownItems,
  getInvolvedDropdownItems,
  connectDropdownItem,
} from "@/data/navbar/navData";

import { NavDropdown, NavbarLinkItem } from "@/components/Navbar/";
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
  return (
    <ul
      className="div-outside-width md:flex-row md:justify-start gap-4 md:gap-1 lg:gap-6"
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

      <NavbarLinkItem
        url="/connect/contact-us"
        label="Connect"
        className={NavClassNames}
      />

      {/* <NavDropdown
        navDropdownItems={connectDropdownItem}
        dropdownLabel="Connect"
        className={NavClassNames}
      /> */}

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
