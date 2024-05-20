"use client";

import { FC, useState } from "react";
import NavLogo from "./NavLogo";
import MenuToggleButton from "./MenuToggleButton";
import NavbarLinks from "./NavbarLinks";
import Sidebar from "./Sidebar";

const CustomNavbar: FC<{}> = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuBarOpen(!isMenuBarOpen);

  return (
    <>
      <nav className="bg-gradient-to-r from-violet-50 via-slate-50 to-purple-50 ">
        <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-3">
          <NavLogo />
          <MenuToggleButton
            isMenuBarOpen={isMenuBarOpen}
            toggleMenu={toggleMenu}
          />
          <div className="hidden md:block md:w-auto">
            <NavbarLinks />
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isMenuBarOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default CustomNavbar;
