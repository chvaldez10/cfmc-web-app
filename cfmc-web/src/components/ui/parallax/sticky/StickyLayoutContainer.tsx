"use client";

import { Container, Flex } from "@chakra-ui/react";
import { COMMON_MAX_WIDTH } from "@/constants/theme/ui";

interface StickyLayoutContainerProps {
  reverse?: boolean;
  children: React.ReactNode;
}

const StickyLayoutContainer = ({
  reverse = false,
  children,
}: StickyLayoutContainerProps) => {
  return (
    <Container
      maxW={COMMON_MAX_WIDTH}
      px={{ base: 4, sm: 6, md: 8, lg: 10 }}
      py={{ base: 8, sm: 10, md: 12, lg: 16 }}
      height="fit-content"
    >
      <Flex
        direction={{
          base: "column",
          md: "column",
          lg: reverse ? "row-reverse" : "row",
        }}
        align="center"
        justify="center"
        gap={{ base: 6, sm: 8, md: 10, lg: 16 }}
        height="fit-content"
        minH={{ base: "auto", lg: "100vh" }}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default StickyLayoutContainer;
