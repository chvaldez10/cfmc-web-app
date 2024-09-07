import { FC, useState, ReactNode, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavDropdownItem from "./NavDropdownItem";
import { NavDropdownItemProps } from "@/types/genericTypes";

interface NavDropdownProps {
  navDropdownItems: NavDropdownItemProps[];
  dropdownLabel: string;
  className: string;
}

const NavDropdown: FC<NavDropdownProps> = ({
  navDropdownItems,
  dropdownLabel,
  className,
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
      id={`nav-${dropdownLabel}`}
    >
      <button
        onClick={toggleDropdown}
        className={`div-outside-width-justify-between md:w-auto text-base lg:text-lg gap-1 ${className}`}
      >
        {dropdownLabel}
        <IoIosArrowDown />
      </button>

      {/*
      left-1/2: sets the left edge of the dropdown container at 50% of the
      width of the li element.

      transform -translate-x-1/2 applies
      a translation to the left (-translate-x) by 50% of the container's own
      width (1/2).
      */}
      {isOpen && (
        <div className="absolute z-20 font-normal bg-zinc-50 divide-y divide-gray-600 rounded-lg shadow w-48 left-1/2 transform -translate-x-1/2 top-full">
          <ul className="py-2 text-sm text-gray-700">
            {navDropdownItems.map((navDropdownItem) => (
              <NavDropdownItem
                key={navDropdownItem.label}
                url={navDropdownItem.url}
                label={navDropdownItem.label}
                svgIcon={navDropdownItem.svgIcon}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
