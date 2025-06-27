import { ReactElement } from "react";
import { Grid, GridItem, GridProps } from "@chakra-ui/react";

interface ThreeByOneGridProps extends GridProps {
  children: [ReactElement, ReactElement, ReactElement];
  variant?: "center" | "top";
}

const ThreeByOneGrid = ({
  children,
  variant = "center",
  ...gridProps
}: ThreeByOneGridProps) => {
  if (children.length !== 3) {
    throw new Error("ThreeByOneGrid expects exactly three children.");
  }

  const verticalAlign = variant === "top" ? "flex-start" : "center";

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
      gap={8}
      position="relative"
      overflow="hidden"
      justifyContent="center"
      p={4}
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
  );
};

export default ThreeByOneGrid;
