import React from "react";
import { IconButton } from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";

interface NavToggleProps {
  toggle: () => void;
}

const NavToggle: React.FC<NavToggleProps> = ({ toggle }) => {
  return (
    <IconButton
      size="sm"
      color="blue-gray"
      variant="text"
      onClick={toggle}
      className="ml-auto mr-2 lg:hidden"
    >
      <Bars2Icon className="h-6 w-6" />
    </IconButton>
  );
};

export default NavToggle;
