import React from "react";
import {
  MenuHandler as MTMenuHandler,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid";

interface NavListMenuHandlerProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

const NavListMenuHandler: React.FC<NavListMenuHandlerProps> = ({
  onClick,
  isMenuOpen,
}) => {
  return (
    <MTMenuHandler onClick={onClick}>
      <Typography as="a" href="#" variant="small" className="font-normal">
        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
          <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
          Pages
          <ChevronDownIcon
            strokeWidth={2}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </MenuItem>
      </Typography>
    </MTMenuHandler>
  );
};

export default NavListMenuHandler;
