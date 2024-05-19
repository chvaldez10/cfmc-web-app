import { FC } from "react";
import NavbarLinks from "./NavbarLinks";

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-white-0 z-50 transition-transform transform ${
        isOpen
          ? "translate-x-0 transition ease-out duration-300"
          : "translate-x-full ease-in duration-300"
      }`}
    >
      <div className="flex justify-start m-5">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          Close
        </button>
      </div>
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "90vh" }}
      >
        <NavbarLinks />
      </div>
    </div>
  );
};

export default Sidebar;
