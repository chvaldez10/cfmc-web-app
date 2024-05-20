import { FC } from "react";
import Link from "next/link";

interface NavbarLinkItemsProps {
  href: string;
  label: string;
}

export const NavbarLinkItems: FC<NavbarLinkItemsProps> = ({ href, label }) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavbarLinkItems;
