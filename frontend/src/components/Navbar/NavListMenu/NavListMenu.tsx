"use client";

import React, { useState } from "react";
import { Menu } from "@material-tailwind/react";

import NavListMenuHandler from "./NavListMenuHandler";
import ListMenu from "./ListMenu";
import MobileMenu from "./MobileMenu";

const NavListMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <NavListMenuHandler
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ListMenu />
      </Menu>
      <MobileMenu />
    </React.Fragment>
  );
};

export default NavListMenu;
