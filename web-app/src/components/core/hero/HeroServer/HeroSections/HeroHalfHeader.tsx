import { FaUserFriends, FaYoutube, FaBrain } from "react-icons/fa";
import {
  Box,
  FlexCenter,
  SectionHeader,
  LongParagraph,
  SectionSubheader,
} from "@/components/core/ui";
import SVGWage from "@/components/core/hero/molecules/atoms/SVGWage";

const HeroHalfHeader = () => {
  return (
    <Box containerClassName="pt-20 relative bg-gradient-to-r from-white-10 to-green-10 text-white overflow-hidden">
      <Box containerClassName="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <FlexCenter containerClassName="md:flex-row ">
          <Box containerClassName="w-full md:w-1/2 mb-12 md:mb-0 space-y-8">
            <SectionHeader
              text="Multimedia Ministry"
              containerClassName="text-5xl lg:text-6xl xl:text-7xl font-bold"
            />
            <LongParagraph>
              Some super epic text about getting involved in multimedia
              ministry.
            </LongParagraph>
          </Box>

          <Box containerClassName="w-full md:w-1/2 md:pl-12 ">
            <Box containerClassName="bg-white-0 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl space-y-4">
              <SectionSubheader text="Join The Ministry" />
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaYoutube className="w-6 h-6 mr-3 text-red-500" />
                  <span>Learn to Play</span>
                </li>
                <li className="flex items-center">
                  <FaUserFriends className="w-6 h-6 mr-3 text-green-500" />
                  <span>Meet New Friends</span>
                </li>
                <li className="flex items-center">
                  <FaBrain className="w-6 h-6 mr-3 text-purple-500" />
                  <span>Be Creative</span>
                </li>
              </ul>
            </Box>
          </Box>
        </FlexCenter>
      </Box>

      <SVGWage />
    </Box>
  );
};

export default HeroHalfHeader;
