import React from "react";
import NavListItem from "./NavListItem";
import navListItems from "./navListItems";

const NavList: React.FC = () => {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon }, key) => (
        <NavListItem key={label} label={label} icon={icon} />
      ))}
    </ul>
  );
};

export default NavList;
