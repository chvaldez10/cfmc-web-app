import React from "react";
import { MenuItem, Typography } from "@material-tailwind/react";

interface NavListMenuItemProps {
  title: string;
  description: string;
}

const NavListMenuItem: React.FC<NavListMenuItemProps> = ({
  title,
  description,
}) => (
  <a href="#" key={title}>
    <MenuItem>
      <Typography variant="h6" color="blue-gray" className="mb-1">
        {title}
      </Typography>
      <Typography variant="small" color="gray" className="font-normal">
        {description}
      </Typography>
    </MenuItem>
  </a>
);

export default NavListMenuItem;
