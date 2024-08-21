import { FC } from "react";
import { Box, SectionSubheader } from "@/components/core/ui/";
import { RiSoundModuleFill } from "react-icons/ri";
import { FaUserFriends, FaBrain } from "react-icons/fa";

// TODO: Refactor this component to be reusable if needed
const BoxIcon: FC = () => {
  return (
    <Box containerClassName="bg-white-0 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl space-y-4 w-full">
      <SectionSubheader text="Join The Ministry" />
      <ul className="space-y-4">
        <li className="flex items-center">
          <RiSoundModuleFill className="w-6 h-6 mr-3 text-green-500" />
          <span>Have Fun While You Serve</span>
        </li>
        <li className="flex items-center">
          <FaUserFriends className="w-6 h-6 mr-3 text-purple-500" />
          <span>Meet New Friends</span>
        </li>
        <li className="flex items-center">
          <FaBrain className="w-6 h-6 mr-3 text-yellow-400" />
          <span>Be Creative</span>
        </li>
      </ul>
    </Box>
  );
};

export default BoxIcon;
