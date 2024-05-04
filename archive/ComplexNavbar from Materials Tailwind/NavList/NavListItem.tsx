import React from "react";
import { Typography, MenuItem } from "@material-tailwind/react";

interface NavListItemProps {
  label: string;
  icon: React.ElementType;
}

const NavListItem: React.FC<NavListItemProps> = ({ label, icon }) => {
  return (
    <Typography
      as="a"
      href="#"
      variant="small"
      color="gray"
      className="font-medium text-blue-gray-500"
    >
      <MenuItem className="flex items-center gap-2 lg:rounded-full">
        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
        <span className="text-gray-900">{label}</span>
      </MenuItem>
    </Typography>
  );
};

export default NavListItem;
