"use client";

import { FC, useState } from "react";

const MenuToggleButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const genericHamburgerLine =
    "h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-300";

  console.log(`Testing Hamburger icon click, isOpen = ${isOpen}`);

  return (
    <button
      onClick={toggleMenu}
      type="button"
      className="flex flex-col h-12 w-12 md:hidden rounded justify-center items-center group"
      aria-controls="mega-menu-full"
      aria-expanded={isOpen}
      aria-label="Toggle navigation menu"
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-60 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-60 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-60 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default MenuToggleButton;
