import { FC, ReactNode } from "react";
import Link from "next/link";

interface NavDropdownItemProps {
  href: string;
  label: string;
  svgIcon: ReactNode;
}

const NavDropdownItem: FC<NavDropdownItemProps> = ({
  href,
  label,
  svgIcon,
}) => {
  return (
    <li className="hover:bg-violet-100 ">
      <Link
        href={href}
        className="flex flex-row gap-2 items-center ml-4 py-2 text-base"
      >
        <span className="hover:text-red-400">{svgIcon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavDropdownItem;
