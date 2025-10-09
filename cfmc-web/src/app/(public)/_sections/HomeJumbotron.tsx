// Inspiration from: https://codepen.io/khone-vongsouthi/full/NbLqeo

import { VStack } from "@chakra-ui/react";
import "@/styles/gradientBackground.css";

// Components
import TwoByOneGrid from "@/components/hero/layouts/TwoByOneGrid";
import { WorshipCountdown } from "@/components/features/date";
import JumboSlideInText from "./JumboSlideInText";

export default async function HomeJumbotron() {
  return (
    <VStack
      id="home-jumbotron-container"
      className="radial-gradient-bg"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <TwoByOneGrid variant="start" id="home-jumbotron-content">
        <JumboSlideInText />
        <WorshipCountdown />
      </TwoByOneGrid>
    </VStack>
  );
}
