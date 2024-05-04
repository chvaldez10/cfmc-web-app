import React from "react";
import { Button, Avatar } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface AvatarButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const AvatarButton: React.FC<AvatarButtonProps> = ({
  isMenuOpen,
  toggleMenu,
}) => (
  <Button
    variant="text"
    color="blue-gray"
    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
    onClick={toggleMenu}
  >
    <Avatar
      variant="circular"
      size="sm"
      alt="User Avatar"
      className="border border-gray-900 p-0.5"
      src=""
    />
    <ChevronDownIcon
      strokeWidth={2.5}
      className={`h-3 w-3 transition-transform ${
        isMenuOpen ? "rotate-180" : ""
      }`}
    />
  </Button>
);

export default AvatarButton;
