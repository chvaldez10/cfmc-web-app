"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { sidebarItems } from "@/data/navbar/sidebarData";

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div
      className={`h-screen bg-white-10 text-gray-800 flex flex-col ${
        isCollapsed ? "w-20" : "w-64"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-20 bg-purple-500 border-b border-purple-400 p-4">
        {!isCollapsed && (
          <h1 className="text-3xl font-bold text-white">
            <Link href="/">Sidebar</Link>
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white focus:outline-none"
        >
          {isCollapsed ? (
            <AiOutlineMenu size={24} />
          ) : (
            <AiOutlineClose size={24} />
          )}
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <nav className="mt-10">
          {sidebarItems.map((sidebarItem) => (
            <Link href={sidebarItem.url} key={sidebarItem.label}>
              <div
                className={`flex items-center py-2.5 px-4 rounded transition duration-300 hover:bg-purple-100 hover:text-purple-700 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                {sidebarItem.svgIcon}
                <span
                  className={`ml-2 transition-opacity duration-300 delay-200 ${
                    isCollapsed ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {!isCollapsed && sidebarItem.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
