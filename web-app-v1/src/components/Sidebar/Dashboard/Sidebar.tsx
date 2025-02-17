"use client";

import { useState, FC } from "react";

// Components
import { Flex } from "@/components/core/ui";
import SidebarHeader from "./SidebarHeader";
import SidebarItems from "./SidebarItems";

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

      {/* Sidebar Items */}
      <SidebarItems isMenuBarOpen={isMenuBarOpen} />
    </Flex>
  );
};

export default Sidebar;
