import { FC } from "react";
import Link from "next/link";

interface NavbarLinkItemProps {
  url: string;
  label: string;
  className?: string;
}

export const NavbarLinkItem: FC<NavbarLinkItemProps> = ({
  url,
  label,
  className,
}) => {
  return (
    <li>
      <Link href={url} className={`text-base lg:text-lg ${className}`}>
        {label}
      </Link>
    </li>
  );
};

export default NavbarLinkItem;
