"use client";

import { useState, FC } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// Components
import { Flex } from "@/components/core/ui";
import SidebarHeader from "./SidebarHeader";

// Data
import { sidebarItems } from "@/data/navbar/sidebarData";

const Sidebar: FC = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState<boolean>(false);

  return (
    <Flex
      containerClassName={`h-screen bg-white-10 flex flex-col ${
        isMenuBarOpen ? "w-20" : "w-64"
      } duration-300`}
    >
      <SidebarHeader
        isMenuBarOpen={isMenuBarOpen}
        toggleMenu={() => setIsMenuBarOpen(!isMenuBarOpen)}
      />

      {/* Sidebar Navigation */}
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <nav className="mt-10">
          {sidebarItems.map((sidebarItem) => (
            <Link href={sidebarItem.url} key={sidebarItem.label}>
              <div
                className={`flex items-center py-2.5 px-4 rounded transition duration-300 hover:bg-purple-100 hover:text-purple-700 ${
                  isMenuBarOpen ? "justify-center" : ""
                }`}
              >
                {sidebarItem.svgIcon}
                <span
                  className={`ml-2 transition-opacity duration-300 delay-200 ${
                    isMenuBarOpen ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {!isMenuBarOpen && sidebarItem.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </Flex>
  );
};

export default Sidebar;
