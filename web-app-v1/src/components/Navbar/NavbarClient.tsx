"use client";

import { FC } from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import {
  NavLogo,
  MenuToggleButton,
  NavbarLinks,
  NavDrawer,
} from "@/components/Navbar";
import { Flex, Box } from "@/components/core/ui";
import "@/styles/wave-border.css";
import { NavbarProvider, useNavbar } from "@/contexts/NavbarContext";

const NavbarContent: FC = () => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 10;
  const changeTextColor = `${isScrolled ? "text-white-10" : ""}`;
  const changeBorderColor = `${scrollPosition > 10 ? "border-white-10" : ""}`;
  const changeMenuIconColor = `${scrollPosition > 10 ? "text-white-0" : ""}`;

  return (
    <>
      <nav
        className={` ${isScrolled ? "wave" : ""}
        fixed top-0 z-30 mx-auto w-full `}
        id="#nav-client"
      >
        <Flex
          containerClassName={` navbar-flex-wrap max-w-screen-xl mx-auto  ${
            scrollPosition > 10 ? "p-4" : "p-8"
          }`}
        >
          <NavLogo textClassName={changeTextColor} />

          <MenuToggleButton changeMenuIconColor={changeMenuIconColor} />

          <Box containerClassName="hidden md:block">
            <NavbarLinks
              NavClassNames={changeTextColor}
              ButtonClassNames={changeBorderColor}
            />
          </Box>
        </Flex>
      </nav>
      <NavDrawer />
    </>
  );
};

const NavbarClient: FC = () => {
  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
};

export default NavbarClient;
