import { FC } from "react";
import {
  CopyrightNotice,
  FooterLinkGroup,
  SocialMediaLinks,
} from "@/components/Footer";
import { Box, Flex, SectionSubheader } from "@/components/core/ui";
import { usefulLinks, otherResources } from "@/data/footer/FooterData";
import { HeroHalfWrapper } from "@/components/core/hero";

const Footer: FC = () => {
  return (
    <footer className="relative py-12">
      <Box containerClassName="container mx-auto px-4">
        <Flex containerClassName="flex flex-wrap text-left lg:text-left gap-4 lg:gap-0">
          {/* Platforms */}
          <HeroHalfWrapper containerClassName="px-4 space-y-2">
            <SectionSubheader
              text="Find us Facebook!"
              containerClassName="font-semibold"
            />
            <SocialMediaLinks />
          </HeroHalfWrapper>

          {/* Footer Links */}
          <HeroHalfWrapper containerClassName="px-4 space-y-2">
            <Flex containerClassName="flex flex-row items-start">
              <FooterLinkGroup
                title={"Useful Links"}
                footerLinks={usefulLinks}
              />
              <FooterLinkGroup
                title={" Other Resources "}
                footerLinks={otherResources}
              />
            </Flex>
          </HeroHalfWrapper>
        </Flex>

        {/* Copyright */}
        <hr className="my-3 border-gray-300" />
        <CopyrightNotice />
      </Box>
    </footer>
  );
};

export default Footer;
