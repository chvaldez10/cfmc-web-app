"use client";

import { Flex, Heading, Text, VStack, Separator } from "@chakra-ui/react";
import "@/styles/slideInAnimations.css";

import { ABOUT_CONTENT } from "@/constants/shared/about";
import { Branding, ModalButtonLabels } from "@/constants/shared/enums";
import { LearnMoreButton } from "@/components/ui/button";

const JumboSlideInText = () => {
  return (
    <VStack
      gap={{ base: 2, md: 4 }}
      align="start"
      w="full"
      borderLeft="solid"
      borderLeftColor="purple.600"
      borderLeftWidth={{ base: "0px", md: "4px" }}
      pl={{ base: 0, md: 4 }}
      py={4}
    >
      {/* Super script Header*/}
      <div className="fade-in-scale delay-0">
        <Flex alignItems="center" gap={2}>
          <Separator
            orientation="horizontal"
            borderColor="purple.600"
            css={{ "--separator-border-width": "2px" }}
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
      </div>
      {/* Our Mission Header */}
      <div className="fade-in-scale delay-1">
        <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="purple.600">
          {ABOUT_CONTENT.WHAT_WE_BELIEVE.title}
        </Heading>
      </div>
      {/* What We Believe */}
      <div className="fade-in-scale delay-2">
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.700">
          {ABOUT_CONTENT.WHAT_WE_BELIEVE.description}
        </Text>
      </div>
      {/* Learn More Button */}
      <div className="fade-in-scale delay-3">
        <LearnMoreButton
          href="/about/beliefs"
          label={ModalButtonLabels.LEARN_MORE}
        />
      </div>
    </VStack>
  );
};

export default JumboSlideInText;
