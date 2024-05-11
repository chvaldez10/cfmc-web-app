import { FC } from "react";
import Link from "next/link";

interface NavbarLinkItemsProps {
  href: string;
  label: string;
  current?: boolean;
}

export const NavbarLinkItems: FC<NavbarLinkItemsProps> = ({
  href,
  label,
  current = false,
}) => {
  const activeClasses =
    "py-2 px-3 rounded md:p-0 dark:bg-blue-600 md:dark:bg-transparent";
  const inactiveClasses = "py-2 px-3 md:p-0";

  return (
    <li>
      <Link href="#">{label}</Link>
    </li>
  );
};

export default NavbarLinkItems;
