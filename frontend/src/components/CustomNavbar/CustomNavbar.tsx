"use client";

import { FC, useState } from "react";
import NavLogo from "./NavLogo";
import MenuToggleButton from "./MenuToggleButton";
import AboutDropdown from "./AboutDropdown";

const CustomNavbar: FC = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  const toggleMenu = () => setIsMenuBarOpen(!isMenuBarOpen);

  return (
    <nav className="bg-violet-10 border-gray-200 m-6 rounded-xl">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <NavLogo />
        <MenuToggleButton
          isMenuBarOpen={isMenuBarOpen}
          toggleMenu={toggleMenu}
        />
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            {/* <NavDropdown label="Dropdown" />
            <NavLink href="#">Services</NavLink> */}
            <AboutDropdown />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
