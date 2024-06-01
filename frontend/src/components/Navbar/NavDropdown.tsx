import { FC, useState } from "react";
import DropdownItem from "./NavDropdownItem";

type NavDropdownItem = {
  label: string;
  url: string;
};

interface NavDropdownProps {
  navDropdownItems: NavDropdownItem[];
  dropdownLabel: string;
}

const NavDropdown: FC<NavDropdownProps> = ({
  navDropdownItems,
  dropdownLabel,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getRotationClass = () => {
    if (isOpen && isHovered) return "rotate-180";
    return "";
  };

  return (
    <li
      className="relative group"
      onMouseEnter={() => {
        setIsOpen(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
        setIsHovered(false);
      }}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 md:w-auto text-sm lg:text-lg"
      >
        {dropdownLabel}
        <svg
          className={`w-2.5 h-2.5 ml-2.5 transition-transform duration-300 ease-in-out transform ${getRotationClass()}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/*
      left-1/2: sets the left edge of the dropdown container at 50% of the
      width of the li element.

      transform -translate-x-1/2 applies
      a translation to the left (-translate-x) by 50% of the container's own
      width (1/2).
      */}
      {isOpen && (
        <div className="absolute z-20 font-normal bg-slate-50 divide-y divide-gray-600 rounded-lg shadow w-48 left-1/2 transform -translate-x-1/2 top-full">
          <ul className="py-2 text-sm text-gray-700">
            {navDropdownItems.map((navDropdownItem) => (
              <DropdownItem
                key={navDropdownItem.label}
                href={navDropdownItem.url}
              >
                {navDropdownItem.label}
              </DropdownItem>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
