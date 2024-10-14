import { FC } from "react";
import { useNavbar } from "@/contexts/NavbarContext";
import { AiOutlineMenuFold } from "react-icons/ai";

interface MenuToggleButtonProps {
  changeMenuIconColor: string;
}

const MenuToggleButton: FC<MenuToggleButtonProps> = ({
  changeMenuIconColor,
}) => {
  const { isMenuBarOpen, toggleMenu } = useNavbar();

  return (
    <button
      onClick={toggleMenu}
      type="button"
      className={`focus:outline-none hover:bg-gray-200 p-2 rounded-full transition-colors md:hidden ${
        isMenuBarOpen ? "mx-auto" : ""
      }`}
      aria-controls="navbarLinks"
      aria-expanded={isMenuBarOpen}
      aria-label="Toggle navigation menu"
    >
      <AiOutlineMenuFold
        size={24}
        strokeWidth={16}
        className={`${changeMenuIconColor}`}
      />
    </button>
  );
};

export default MenuToggleButton;
