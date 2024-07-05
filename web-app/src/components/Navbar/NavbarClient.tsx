"use client";

import { FC, useState } from "react";
import {
  NavLogo,
  MenuToggleButton,
  NavbarLinks,
  NavDrawer,
} from "@/components/Navbar";
import useScrollPosition from "@/hooks/useScrollPosition";
import "@/styles/wave-border.css";

const NavbarClient: FC<{}> = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuBarOpen(!isMenuBarOpen);
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 10;
  const changeTextColor = `${isScrolled ? "text-white-10" : ""}`;
  const changeBorderColor = `${scrollPosition > 10 ? "border-white-10" : ""}`;
  const changeBackgroundColor = `${scrollPosition > 10 ? "bg-white-10" : ""}`;

  return (
    <>
      <nav
        className={` ${isScrolled ? "wave" : ""}
        fixed top-0 z-50 mx-auto w-full `}
        id="#custom-navbar"
      >
        <div
          className={`max-w-screen-xl div-outside-width-wrapped mx-auto ${
            scrollPosition > 10 ? "p-2" : "p-6"
          }`}
        >
          <NavLogo className={changeTextColor} />

          <MenuToggleButton
            isMenuBarOpen={isMenuBarOpen}
            toggleMenu={toggleMenu}
            changeBackgroundColor={changeBackgroundColor}
          />

          <div className="hidden md:block">
            <NavbarLinks
              NavClassNames={changeTextColor}
              ButtonClassNames={changeBorderColor}
            />
          </div>
        </div>
      </nav>
      <NavDrawer isOpen={isMenuBarOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavbarClient;
