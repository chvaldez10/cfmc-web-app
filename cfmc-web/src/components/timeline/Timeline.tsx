"use client";

import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import TimelineSection from "./TimelineSection";
import { CHURCH_HISTORY } from "@/constants/history";

export default function Timeline() {
  return (
    <Box maxW="4xl" mx="auto">
      <VStack spacing={12} align="stretch">
        {CHURCH_HISTORY.historySections.map((section, sectionIndex) => (
          <TimelineSection
            key={sectionIndex}
            section={section}
            sectionIndex={sectionIndex}
            isLastSection={
              sectionIndex === CHURCH_HISTORY.historySections.length - 1
            }
          />
        ))}
      </VStack>
    </Box>
  );
}
