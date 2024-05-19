import { FC } from "react";
import NavbarLinks from "./NavbarLinks";

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          Close
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <NavbarLinks />
      </div>
    </div>
  );
};

export default Sidebar;
