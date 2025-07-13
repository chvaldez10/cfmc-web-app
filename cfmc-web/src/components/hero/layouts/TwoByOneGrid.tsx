import { ReactElement } from "react";
import { Box, Grid, GridItem, GridProps } from "@chakra-ui/react";

interface TwoByOneGridProps extends GridProps {
  children: [ReactElement, ReactElement];
  variant?: "center" | "start";
  outerBackground?: string;
  reverse?: boolean;
}

const TwoByOneGrid = ({
  children,
  variant = "center",
  outerBackground,
  reverse = false,
  ...gridProps
}: TwoByOneGridProps) => {
  if (children.length !== 2) {
    throw new Error("TwoByOneGrid expects exactly two children.");
  }

  const [firstChild, secondChild] = reverse
    ? [children[1], children[0]]
    : children;

  const alignment = variant === "start" ? "start" : "center";

  return (
    <Box
      mx="auto"
      maxW={{ base: "full", md: "7xl" }}
      px={{ base: 4, md: 0 }}
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 8, lg: 12 }}
        className={gridProps.className}
        {...gridProps}
      >
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: alignment }}
        >
          {firstChild}
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: alignment }}
        >
          {secondChild}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TwoByOneGrid;
