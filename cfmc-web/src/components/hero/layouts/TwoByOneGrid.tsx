import { ReactNode } from "react";
import { Grid, GridItem, GridProps } from "@chakra-ui/react";

interface TwoByOneGridProps extends GridProps {
  children: [ReactNode, ReactNode]; // Expecting exactly two children
}

const TwoByOneGrid = ({ children, ...gridProps }: TwoByOneGridProps) => {
  // Runtime check to ensure exactly two children are provided
  if (children.length !== 2) {
    throw new Error("TwoByOneGrid expects exactly two children.");
  }

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={4}
      position="relative"
      overflow="hidden"
      justifyContent="center"
      p={8}
      minH="100vh"
      className={gridProps.className}
      {...gridProps}
    >
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        {children[0]}
      </GridItem>

      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        {children[1]}
      </GridItem>
    </Grid>
  );
};

export default TwoByOneGrid;
