import { FC } from "react";
import NavbarLinks from "./NavbarLinks";
import { Box, FlexCenter } from "@/components/core/ui";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useNavbar } from "@/contexts/NavbarContext";

const NavDrawer: FC = () => {
  const { isMenuBarOpen, toggleMenu } = useNavbar();

  return (
    <Box
      containerClassName={`fixed inset-0 bg-white-0 z-50 transition-transform transform ${
        isMenuBarOpen
          ? "translate-x-0 transition ease-out duration-300"
          : "translate-x-full ease-in duration-300"
      }`}
    >
      {/* Close Button */}
      <Box containerClassName="absolute top-8 left-8">
        <button
          className="ml-auto hover:bg-gray-200 button-style"
          onClick={toggleMenu}
        >
          <AiOutlineMenuUnfold size={24} strokeWidth={16} />
        </button>
      </Box>

      {/* Navbar Links */}
      <FlexCenter containerClassName="div-outside-width min-h-screen">
        <NavbarLinks />
      </FlexCenter>
    </Box>
  );
};

export default NavDrawer;
