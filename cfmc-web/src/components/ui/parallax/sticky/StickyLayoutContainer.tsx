"use client";

import { Container, Flex } from "@chakra-ui/react";

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
      maxW="7xl"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
      height="fit-content"
    >
      <Flex
        direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
        align="center"
        justify="center"
        gap={{ base: 6, md: 16 }}
        height="fit-content"
        minH={{ base: "auto", md: "100vh" }}
        sx={{
          "@media (max-height: 700px) and (max-width: 768px)": {
            minHeight: "auto",
          },
        }}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default StickyLayoutContainer;
