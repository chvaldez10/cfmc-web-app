// components/MenuToggle.tsx
import React, { useState } from "react";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Card,
} from "@material-tailwind/react";

import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

import NavList from "./NavList";
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
