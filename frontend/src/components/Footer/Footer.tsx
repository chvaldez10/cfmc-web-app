import { FC } from "react";
import { FaFacebook } from "react-icons/fa";
import CopyrightNotice from "@/components/Footer/CopyrightNotice";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer: FC = () => {
  return (
    <footer className="relative pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Platforms */}
          <div className="w-full lg:w-6/12 px-4">
            <p className="text-2xl mt-0 mb-2 font-semibold text-blueGray-600">
              Find us on any of these platforms.
            </p>
            <SocialMediaLinks />
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      MIT License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <CopyrightNotice />
      </div>
    </footer>
  );
};

export default Footer;
