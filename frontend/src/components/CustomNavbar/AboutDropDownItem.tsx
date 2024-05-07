import { FC } from "react";

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
}

const DropdownItem: FC<DropdownItemProps> = ({ href, children }) => (
  <li>
    <a href={href} className="block px-4 py-2 hover:bg-violet-50 ">
      {children}
    </a>
  </li>
);

export default DropdownItem;
