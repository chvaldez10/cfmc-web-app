import { FC } from "react";

interface NavDropdownItemProps {
  href: string;
  children: React.ReactNode;
}

const NavDropdownItem: FC<NavDropdownItemProps> = ({ href, children }) => (
  <li>
    <a href={href} className="block px-4 py-2 hover:bg-violet-50 ">
      {children}
    </a>
  </li>
);

export default NavDropdownItem;
