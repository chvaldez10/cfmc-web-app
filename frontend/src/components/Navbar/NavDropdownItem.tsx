import { FC } from "react";
import Link from "next/link";

interface NavDropdownItemProps {
  href: string;
  children: React.ReactNode;
}

const NavDropdownItem: FC<NavDropdownItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className="block px-4 py-2 hover:bg-violet-100 ">
        {children}
      </Link>
    </li>
  );
};

export default NavDropdownItem;
