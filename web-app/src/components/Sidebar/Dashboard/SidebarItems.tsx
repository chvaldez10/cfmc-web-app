import { FC } from "react";
import Link from "next/link";

// Components
import { Flex } from "@/components/core/ui";

// Data
import { sidebarItems } from "@/data/navbar/sidebarData";

interface SidebarItemsProps {
  isMenuBarOpen: boolean;
}

const SidebarItems: FC<SidebarItemsProps> = ({ isMenuBarOpen }) => {
  return (
    <Flex containerClassName="flex-1 flex flex-col justify-between overflow-hidden">
      <nav className="mt-8">
        {sidebarItems.map((sidebarItem) => (
          <Link href={sidebarItem.url} key={sidebarItem.label}>
            <Flex
              containerClassName={`flex items-center py-2 px-4 rounded transition duration-300 hover:bg-purple-100 hover:text-purple-700 ${
                isMenuBarOpen ? "justify-center" : ""
              }`}
            >
              {sidebarItem.svgIcon}

              {/* Label */}
              <span
                className={`transition-opacity duration-300 delay-200 ${
                  isMenuBarOpen ? "opacity-0" : "opacity-100 ml-2"
                }`}
              >
                {!isMenuBarOpen && sidebarItem.label}
              </span>
            </Flex>
          </Link>
        ))}
      </nav>
    </Flex>
  );
};

export default SidebarItems;
