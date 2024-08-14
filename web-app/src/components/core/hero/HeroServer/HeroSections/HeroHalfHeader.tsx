import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaShieldAlt, FaBrain } from "react-icons/fa";
import { Box } from "@/components/core/ui";

const HeroHalfHeader = () => {
  return (
    <Box containerClassName="relative bg-gradient-to-r from-white-10 to-green-10 text-white overflow-hidden">
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

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="xMinYMin meet"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto" }}
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </Box>
  );
};

export default HeroHalfHeader;
