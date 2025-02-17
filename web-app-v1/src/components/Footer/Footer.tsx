import { FC } from "react";
import {
  CopyrightNotice,
  FooterLinkGroup,
  SocialMediaLinks,
} from "@/components/Footer";
import { Box, Flex, SectionSubheader } from "@/components/core/ui";
import { usefulLinks, otherResources } from "@/data/footer/FooterData";
import { HeroHalfWrapper, ContainerWrapper } from "@/components/core/hero";

const Footer: FC = () => {
  return (
    <footer className="relative pb-16">
      <ContainerWrapper containerClassName="w-full max-w-6xl">
        <Flex containerClassName="flex flex-wrap text-left lg:text-left gap-4 lg:gap-0 py-4">
          {/* Platforms */}
          <HeroHalfWrapper containerClassName="px-4 space-y-2">
            <SectionSubheader
              text="Find us on Facebook!"
              containerClassName="font-bold uppercase"
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
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
