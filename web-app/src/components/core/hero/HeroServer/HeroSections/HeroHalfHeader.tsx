import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaShieldAlt, FaBrain } from "react-icons/fa";
import { Box } from "@/components/core/ui";
import SVGWage from "@/components/core/hero/molecules/atoms/SVGWage";

const HeroHalfHeader = () => {
  return (
    <Box containerClassName="pt-20 relative bg-gradient-to-r from-white-10 to-green-10 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get Involved
              <br />
              In Multimedia
              <br />
              Ministry
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Some super epic text about getting involved in multimedia
              ministry.
            </p>
          </div>

          {/* Right Side: Features */}
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-6">Join The Team</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaBolt className="w-6 h-6 mr-3 text-yellow-400" />
                  <span>Learn Something Cool</span>
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="w-6 h-6 mr-3 text-green-400" />
                  <span>Make New Friends</span>
                </li>
                <li className="flex items-center">
                  <FaBrain className="w-6 h-6 mr-3 text-purple-400" />
                  <span>Be Creative</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SVGWage />
    </Box>
  );
};

export default HeroHalfHeader;
