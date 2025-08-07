// Inspiration from: https://codepen.io/khone-vongsouthi/full/NbLqeo

import { VStack } from "@chakra-ui/react";

// Components
import TwoByOneGrid from "@/components/hero/layouts/TwoByOneGrid";
import { WorshipCountdown } from "@/components/features/date";
import JumboSlideInText from "./JumboSlideInText";

// Styles
import styles from "@/styles/GradientBackground.module.css";

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
        <JumboSlideInText />
        <WorshipCountdown />
      </TwoByOneGrid>
    </VStack>
  );
};

export default HomeJumbotron;
