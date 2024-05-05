"use client";

import { FC, useState } from "react";
import DropdownItem from "./AboutDropDownItem"; // Make sure this component is properly importing and exporting.

const aboutDropDownItems: string[] = [
  "Ministry",
  "Our Mission",
  "Community",
  "Contact Us",
];

const AboutDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  console.log(`Testing About toggle click, isOpen = ${isOpen}`);

  return (
    <li className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white"
      >
        About
        <svg
          className="w-2.5 h-2.5 ml-2.5"
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

      {isOpen && (
        <div className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            {aboutDropDownItems.map((item) => (
              <DropdownItem key={item} href="#">
                {item}
              </DropdownItem>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default AboutDropdown;
