import { FC } from "react";
import NavbarLinks from "./NavbarLinks";
import { CloseButton } from "@/components/core/ui";

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavDrawer: FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-white-0 z-50 transition-transform transform ${
        isOpen
          ? "translate-x-0 transition ease-out duration-300"
          : "translate-x-full ease-in duration-300"
      }`}
    >
      <div className="absolute top-7 left-7">
        <CloseButton onClose={toggleMenu} />
      </div>
      <div className="div-outside-width h-screen">
        <NavbarLinks />
      </div>
    </div>
  );
};

export default NavDrawer;
