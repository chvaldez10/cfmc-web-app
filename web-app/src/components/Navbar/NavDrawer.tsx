import { FC } from "react";
import NavbarLinks from "./NavbarLinks";

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavDrawer: React.FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-white-0 z-50 transition-transform transform ${
        isOpen
          ? "translate-x-0 transition ease-out duration-300"
          : "translate-x-full ease-in duration-300"
      }`}
    >
      <div className="relative">
        <button onClick={toggleMenu} className="absolute top-10 left-10">
          Close
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <NavbarLinks />
      </div>
    </div>
  );
};

export default NavDrawer;
