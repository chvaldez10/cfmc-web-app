"use client";

import { FC, useState } from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import {
  NavLogo,
  MenuToggleButton,
  NavbarLinks,
  NavDrawer,
} from "@/components/Navbar";
import { Flex, Box } from "@/components/core/ui";
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
        fixed top-0 z-30 mx-auto w-full `}
        id="#nav-client"
      >
        <Flex
          containerClassName={` navbar-flex-wrap max-w-screen-xl mx-auto  ${
            scrollPosition > 10 ? "p-2" : "p-6"
          }`}
        >
          <NavLogo textClassName={changeTextColor} />

          <MenuToggleButton
            isMenuBarOpen={isMenuBarOpen}
            toggleMenu={toggleMenu}
            changeBackgroundColor={changeBackgroundColor}
          />

          <Box containerClassName="hidden md:block">
            <NavbarLinks
              NavClassNames={changeTextColor}
              ButtonClassNames={changeBorderColor}
            />
          </Box>
        </Flex>
      </nav>
      <NavDrawer isOpen={isMenuBarOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NavbarClient;
