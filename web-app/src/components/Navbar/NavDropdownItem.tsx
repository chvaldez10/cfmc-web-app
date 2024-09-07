import { FC } from "react";
import Link from "next/link";
import { IconProps } from "@/types/genericTypes";

interface NavDropdownItemProps extends IconProps {}

const NavDropdownItem: FC<NavDropdownItemProps> = ({ url, label, svgIcon }) => {
  return (
    <li className="hover:bg-violet-100">
      <Link
        href={url}
        className="flex flex-row gap-2 items-center ml-4 py-2 text-base "
      >
        <span className="hover:text-red-400">{svgIcon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavDropdownItem;
