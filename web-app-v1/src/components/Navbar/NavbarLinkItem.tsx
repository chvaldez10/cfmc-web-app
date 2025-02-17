import { FC } from "react";
import Link from "next/link";
import { useNavbar } from "@/contexts/NavbarContext";

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
  const { isMenuBarOpen, toggleMenu } = useNavbar();

  const handleClick = () => {
    if (isMenuBarOpen) {
      toggleMenu();
    }
  };

  return (
    <li>
      <Link
        href={url}
        className={`text-base lg:text-lg ${className}`}
        onClick={handleClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavbarLinkItem;
