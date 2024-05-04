import React from "react";
import { MenuItem } from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import NavList from "./NavList";

const MobileMenu: React.FC = () => (
  <>
    <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
      <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
      Pages
    </MenuItem>
    <NavList />
  </>
);

export default MobileMenu;
