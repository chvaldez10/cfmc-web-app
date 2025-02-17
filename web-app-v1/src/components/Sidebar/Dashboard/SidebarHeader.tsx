import { FC } from "react";
import Link from "next/link";
import { Flex } from "@/components/core/ui";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

interface SidebarHeaderProps {
  isMenuBarOpen: boolean;
  toggleMenu: () => void;
}

const SidebarHeader: FC<SidebarHeaderProps> = ({
  isMenuBarOpen,
  toggleMenu,
}) => {
  return (
    <Flex containerClassName="flex items-center justify-between h-20 bg-gradient-to-r from-purple-600 to-purple-800 border-b border-purple-400 p-4 text-white-10 shadow-md">
      {/* Title */}
      {!isMenuBarOpen && (
        // Note that this is the same styling as SectionSubheader but with a link
        <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl max-w-2xl font-bold tracking-wide">
          <Link
            href="/"
            className="hover:text-purple-200 transition-colors duration-300"
          >
            CFMC
          </Link>
        </h2>
      )}

      {/* Toggle Buttons */}
      <button
        onClick={toggleMenu}
        className={`button-style hover:bg-purple-700 ${
          isMenuBarOpen ? "mx-auto" : ""
        }`}
      >
        {isMenuBarOpen ? (
          <AiOutlineMenuUnfold size={24} strokeWidth={16} />
        ) : (
          <AiOutlineMenuFold size={24} strokeWidth={16} />
        )}
      </button>
    </Flex>
  );
};

export default SidebarHeader;
