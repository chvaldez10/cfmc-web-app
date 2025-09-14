"use client";

import React from "react";
import { VStack } from "@chakra-ui/react";
import TimelineSection from "./TimelineSection";
import { CHURCH_HISTORY } from "@/constants/history";

export default function Timeline() {
  return (
    <VStack spacing={12} align="stretch" w="full">
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
  );
}
