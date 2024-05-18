import { FC, useState } from "react";

interface MenuToggleButtonProps {
  isMenuBarOpen: boolean;
  toggleMenu: () => void;
}

const genericHamburgerLine =
  "h-1 w-7 my-0.5 rounded-full bg-black transition ease transform duration-300";

const baseOpacity = "opacity-60 group-hover:opacity-100";

const activeTransform = "opacity-50 group-hover:opacity-100";

const MenuToggleButton: FC<MenuToggleButtonProps> = ({
  isMenuBarOpen,
  toggleMenu,
}) => {
  return (
    <button
      onClick={toggleMenu}
      type="button"
      className="flex flex-col h-12 w-12 md:hidden rounded justify-center items-center group"
      aria-controls="navbarLinks"
      aria-expanded={isMenuBarOpen}
      aria-label="Toggle navigation menu"
    >
      {/* Top layer */}
      <div
        className={`${genericHamburgerLine} ${
          isMenuBarOpen
            ? `rotate-45 translate-y-2 ${activeTransform}`
            : baseOpacity
        }`}
      />

      {/* Middle layer */}
      <div
        className={`${genericHamburgerLine} ${
          isMenuBarOpen ? "opacity-0" : baseOpacity
        }`}
      />

      {/* Bottom layer */}
      <div
        className={`${genericHamburgerLine} ${
          isMenuBarOpen
            ? `-rotate-45 -translate-y-2 ${activeTransform}`
            : baseOpacity
        }`}
      />
    </button>
  );
};

export default MenuToggleButton;
