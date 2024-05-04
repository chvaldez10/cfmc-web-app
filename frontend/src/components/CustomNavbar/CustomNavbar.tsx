"use client";

import { FC } from "react";
import NavLogo from "./NavLogo";
import MenuToggleButton from "./MenuToggleButton";

const CustomNavbar: FC = () => {
  return (
    <nav className="bg-white-10 border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <NavLogo />
        <MenuToggleButton toggleMenu={() => {}} />
      </div>
    </nav>
  );
};

export default CustomNavbar;
