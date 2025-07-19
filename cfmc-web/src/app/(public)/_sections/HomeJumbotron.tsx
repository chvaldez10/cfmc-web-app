// Inspiration from: https://codepen.io/khone-vongsouthi/full/NbLqeo

import {
  Flex,
  Heading,
  Text,
  VStack,
  Divider,
  SlideFade,
} from "@chakra-ui/react";

// Components
import TwoByOneGrid from "@/components/hero/layouts/TwoByOneGrid";
import { Branding, ModalButtonLabels } from "@/constants/shared/enums";
import { ABOUT_CONTENT } from "@/constants/shared/about";
import { WorshipCountdown } from "@/components/features/date";
import { LearnMoreButton } from "@/components/ui/button";

// Styles
import styles from "./GradientBackground.module.css";

const HomeJumbotron = () => {
  return (
    <VStack
      id="home-jumbotron-container"
      className={styles.radialGradient}
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <TwoByOneGrid variant="start" id="home-jumbotron-content">
        <HomeJumboDetails />
        <WorshipCountdown />
      </TwoByOneGrid>
    </VStack>
  );
};

export default HomeJumbotron;

const HomeJumboDetails = () => {
  return (
    <SlideFadeText delay={0}>
      <VStack
        spacing={{ base: 2, md: 4 }}
        align="start"
        w="full"
        borderLeft="solid"
        borderLeftColor="purple.600"
        borderLeftWidth={{ base: "0px", md: "4px" }}
        pl={{ base: 0, md: 4 }}
        py={4}
      >
        {/* Super script Header*/}
        <SlideFadeText delay={0.4}>
          <Flex alignItems="center" gap={2}>
            <Divider
              orientation="horizontal"
              borderColor="purple.600"
              borderWidth="2px"
              width="12px"
            />
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="bold"
              color="gray.600"
            >
              {Branding.CHURCH_NAME}
            </Text>
          </Flex>
        </SlideFadeText>
        {/* Our Mission Header */}
        <SlideFadeText delay={0.8}>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="purple.600">
            {ABOUT_CONTENT.WHAT_WE_BELIEVE.title}
          </Heading>
        </SlideFadeText>
        {/* What We Believe */}
        <SlideFadeText delay={1.2}>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.700">
            {ABOUT_CONTENT.WHAT_WE_BELIEVE.description}
          </Text>
        </SlideFadeText>
        {/* Learn More Button */}
        <SlideFadeText delay={1.6}>
          <LearnMoreButton
            href="/about-us/beliefs"
            label={ModalButtonLabels.LEARN_MORE}
          />
        </SlideFadeText>
      </VStack>
    </SlideFadeText>
  );
};

const SlideFadeText = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const slideFadeProps = {
    in: true,
    offsetX: "0px",
    offsetY: "-50px",
    transition: { enter: { duration: 0.4, delay } },
  };

  return (
    <SlideFade {...slideFadeProps} offsetX="-50px" offsetY="0px">
      {children}
    </SlideFade>
  );
};
