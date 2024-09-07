"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { NavDropdownItemProps as DropdownItemProps } from "@/types/genericTypes";

interface NavDropdownItemProps extends DropdownItemProps {}

const NavDropdownItem: FC<NavDropdownItemProps> = ({
  url,
  label,
  svgIcon,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(`clicked ${url}`);
    e.preventDefault();
    onClick();
    setTimeout(() => {
      router.push(url);
    }, 100);
  };

  return (
    <li className="hover:bg-violet-100">
      <Link
        href={url}
        className="flex flex-row gap-2 items-center ml-4 py-2 text-base "
        onClick={handleClick}
      >
        <span className="hover:text-red-400">{svgIcon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default NavDropdownItem;
