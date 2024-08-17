import { FC } from "react";
import {
  CopyrightNotice,
  FooterLinkGroup,
  SocialMediaLinks,
} from "@/components/Footer";
import { Box } from "@/components/core/ui";
import { usefulLinks, otherResources } from "@/data/footer/FooterData";

const Footer: FC = () => {
  return (
    <footer className="relative py-12 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Platforms */}
          <div className="w-full lg:w-6/12 px-4">
            <p className="text-2xl mt-0 mb-2 font-semibold text-gray-800">
              Find us Facebook!
            </p>
            <SocialMediaLinks />
          </div>

          {/* Footer Links */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-row items-top mb-6">
              <FooterLinkGroup
                title={"Useful Links"}
                footerLinks={usefulLinks}
              />
              <FooterLinkGroup
                title={" Other Resources "}
                footerLinks={otherResources}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="py-3 border-gray-300" />
        <CopyrightNotice />
      </div>
    </footer>
  );
};

export default Footer;
