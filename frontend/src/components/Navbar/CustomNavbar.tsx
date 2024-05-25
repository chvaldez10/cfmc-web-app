"use client";

import { FC, useEffect, useState } from "react";
import NavLogo from "./NavLogo";
import MenuToggleButton from "./MenuToggleButton";
import NavbarLinks from "./NavbarLinks";
import Sidebar from "./Sidebar";
import useScrollPosition from "@/hooks/useScrollPosition";

const CustomNavbar: FC<{}> = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState<boolean>(false);
  const scrollPosition = useScrollPosition();
  const toggleMenu = () => setIsMenuBarOpen(!isMenuBarOpen);
  return (
    <>
      <nav
        className={`${scrollPosition > 50 ? "bg-purple-600" : "bg-purple-50"}
        sticky top-0 z-50 transition-colors duration-300 p-2`}
        style={{ height: "10vh" }}
      >
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
