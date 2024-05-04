import React from "react";
import navListMenuItems from "./navListItem";
import NavListMenuItem from "./NavListMenuItem";

const NavList: React.FC = () => (
  <ul>
    {navListMenuItems.map((item) => (
      <NavListMenuItem
        key={item.title}
        title={item.title}
        description={item.description}
      />
    ))}
  </ul>
);

export default NavList;
