import { FC, useState } from "react";

interface MenuToggleButtonProps {
  isMenuBarOpen: boolean;
  toggleMenu: () => void;
}

const hamburgerLine =
  "h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-300";

const hamburgerLineStyles = [
  { open: "rotate-45 translate-y-3 opacity-50", close: "opacity-60" },
  { open: "opacity-0", close: "opacity-60" },
  { open: "-rotate-45 -translate-y-3 opacity-50", close: "opacity-60" },
];

const MenuToggleButton: FC<MenuToggleButtonProps> = ({
  isMenuBarOpen,
  toggleMenu,
}) => {
  console.log(`Testing Hamburger icon click, isMenuBarOpen = ${isMenuBarOpen}`);

  return (
    <button
      onClick={toggleMenu}
      type="button"
      className="flex flex-col h-12 w-12 md:hidden rounded justify-center items-center group"
      aria-controls="navbarLinks"
      aria-expanded={isMenuBarOpen}
      aria-label="Toggle navigation menu"
    >
      {hamburgerLineStyles.map((style, index) => (
        <div
          key={index}
          className={`${hamburgerLine} ${
            isMenuBarOpen
              ? `%{style.open} group-hover:opacity-100`
              : `${style.close} group-hover:opacity-100`
          }`}
        />
      ))}
    </button>
  );
};

export default MenuToggleButton;
