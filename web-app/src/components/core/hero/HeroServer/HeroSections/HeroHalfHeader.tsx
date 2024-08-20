import { FaUserFriends, FaYoutube, FaBrain } from "react-icons/fa";
import {
  Box,
  FlexCenter,
  SectionHeader,
  LongParagraph,
  SectionSubheader,
} from "@/components/core/ui";
import {
  FlexWrapper,
  VerticalWrapper,
  HeroHalfWrapper,
} from "@/components/core/hero";
import { RiSoundModuleFill } from "react-icons/ri";
import SVGWage from "@/components/core/hero/molecules/atoms/SVGWage";

const HeroHalfHeader = () => {
  return (
    <Box containerClassName="bg-gradient-to-r from-white-10 to-green-10 overflow-hidden">
      {/* <Box containerClassName="container mx-auto px-4 py-24 md:py-32 relative z-10 "> */}
      <FlexWrapper layoutClass="div-col-row" containerClassName="min-h-screen">
        <HeroHalfWrapper containerClassName="space-y-4 lg:space-y-8 div-outside-width">
          <SectionHeader
            text="Multimedia"
            containerClassName="text-6xl lg:text-7xl xl:text-8xl font-bold"
          />
          <LongParagraph>
            Some super epic text about getting involved in multimedia ministry.
          </LongParagraph>
        </HeroHalfWrapper>

        <HeroHalfWrapper containerClassName="div-outside-width ">
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
        </HeroHalfWrapper>
      </FlexWrapper>
      {/* </Box> */}

      <SVGWage />
    </Box>
  );
};

export default HeroHalfHeader;
