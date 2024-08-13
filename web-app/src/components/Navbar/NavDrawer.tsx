import { FC } from "react";
import NavbarLinks from "./NavbarLinks";
import { Box, FlexCenter } from "@/components/core/ui";
import { CloseButton } from "@/components/core/ui";

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavDrawer: FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <Box
      containerClassName={`fixed inset-0 bg-white-0 z-50 transition-transform transform ${
        isOpen
          ? "translate-x-0 transition ease-out duration-300"
          : "translate-x-full ease-in duration-300"
      }`}
    >
      <Box containerClassName="absolute top-7 left-7">
        <CloseButton onClose={toggleMenu} />
      </Box>
      <FlexCenter containerClassName="div-outside-width min-h-screen">
        <NavbarLinks />
      </FlexCenter>
    </Box>
  );
};

export default NavDrawer;
