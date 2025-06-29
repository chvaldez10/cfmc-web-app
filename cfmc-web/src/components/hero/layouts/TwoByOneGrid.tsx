import { ReactElement } from "react";
import { Box, Grid, GridItem, GridProps } from "@chakra-ui/react";

interface TwoByOneGridProps extends GridProps {
  children: [ReactElement, ReactElement];
  variant?: "center" | "top";
  outerBackground?: string;
}

const TwoByOneGrid = ({
  children,
  variant = "center",
  outerBackground,
  ...gridProps
}: TwoByOneGridProps) => {
  if (children.length !== 2) {
    throw new Error("TwoByOneGrid expects exactly two children.");
  }

  const verticalAlign = variant === "top" ? "flex-start" : "center";

  return (
    <Box className={outerBackground} w="full">
      <Box mx="auto" maxW={{ base: "full", md: "8xl" }} px={{ base: 4, md: 8 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={4}
          minH="100vh"
          className={gridProps.className}
          {...gridProps}
        >
          <GridItem
            display="flex"
            alignItems={verticalAlign}
            justifyContent="center"
          >
            {children[0]}
          </GridItem>
          <GridItem
            display="flex"
            alignItems={verticalAlign}
            justifyContent="center"
          >
            {children[1]}
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default TwoByOneGrid;
