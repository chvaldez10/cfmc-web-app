import { ReactElement } from "react";
import { Box, Grid, GridItem, GridProps } from "@chakra-ui/react";

interface ThreeByOneGridProps extends GridProps {
  children: [ReactElement, ReactElement, ReactElement];
  variant?: "center" | "top";
  outerBackground?: string;
  maxWidth?: GridProps["maxW"];
}

const ThreeByOneGrid = ({
  children,
  variant = "center",
  outerBackground,
  ...gridProps
}: ThreeByOneGridProps) => {
  if (children.length !== 3) {
    throw new Error("ThreeByOneGrid expects exactly three children.");
  }

  const verticalAlign = variant === "top" ? "flex-start" : "center";

  return (
    <Box className={outerBackground} w="full">
      <Box mx="auto" maxW={{ base: "full", md: "7xl" }} px={{ base: 4, md: 0 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          py={8}
          className={gridProps.className}
          {...gridProps}
        >
          {children.map((child, index) => (
            <GridItem
              key={index}
              display="flex"
              alignItems={verticalAlign}
              justifyContent="center"
              data-testid={`three-by-one-grid-item-${index}`}
            >
              {child}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ThreeByOneGrid;
