"use client";

import { FC, useState } from "react";
import NavLogo from "./NavLogo";
import MenuToggleButton from "./MenuToggleButton";
import NavbarLinks from "./NavbarLinks";

const CustomNavbar: FC = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  const toggleMenu = () => setIsMenuBarOpen(!isMenuBarOpen);

  return (
    <nav className="bg-violet-10 border-gray-200 m-6 rounded-xl">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
        <NavLogo />
        <MenuToggleButton
          isMenuBarOpen={isMenuBarOpen}
          toggleMenu={toggleMenu}
        />
        <div
          className={`w-full md:block md:w-auto ${
            isMenuBarOpen ? "block" : "hidden"
          }`}
        >
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
