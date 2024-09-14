import { FC, useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavDropdownItem from "./NavDropdownItem";
import { IconProps } from "@/types/uiProps";

interface NavDropdownProps {
  navDropdownItems: IconProps[];
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
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getRotationClass = () => {
    if (isOpen || isHovered) return "rotate-180";
    return "";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <li
      ref={dropdownRef}
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
        <IoIosArrowDown className={getRotationClass()} />
      </button>

      {(isOpen || isHovered) && (
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
