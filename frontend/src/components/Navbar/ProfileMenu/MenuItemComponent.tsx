import React from "react";
import { MenuItem, Typography } from "@material-tailwind/react";

interface MenuItemProps {
  label: string;
  icon: React.ElementType;
  closeMenu: () => void;
  isLastItem: boolean;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({
  label,
  icon,
  closeMenu,
  isLastItem,
}) => (
  <MenuItem
    onClick={closeMenu}
    className={`flex items-center gap-2 rounded ${
      isLastItem
        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        : ""
    }`}
  >
    {React.createElement(icon, {
      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
      strokeWidth: 2,
    })}
    <Typography
      as="span"
      variant="small"
      className="font-normal"
      color={isLastItem ? "red" : "inherit"}
    >
      {label}
    </Typography>
  </MenuItem>
);

export default MenuItemComponent;
