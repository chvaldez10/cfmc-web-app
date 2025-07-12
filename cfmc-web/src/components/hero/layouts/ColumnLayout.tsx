import { ReactNode } from "react";
import {
  Container,
  VStack,
  ContainerProps,
  StackProps,
} from "@chakra-ui/react";

interface ColumnLayoutProps {
  id?: string;
  ariaLabelledBy?: string;
  children: ReactNode;
  // Container configuration
  maxW?: ContainerProps["maxW"];
  minH?: string;
  bg?: string;
  bgGradient?: string;
  // Alignment and positioning
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
  // Spacing and padding
  spacing?: StackProps["spacing"];
  py?: string | number | object;
  px?: string | number | object;
  // Text alignment
  textAlign?: "left" | "center" | "right";
  // Additional styling
  borderRadius?: string | number;
  shadow?: string;
  border?: string;
  borderColor?: string;
  color?: string;
  // Responsive options
  responsive?: boolean;
  // Custom container props
  containerProps?: Partial<ContainerProps>;
  // Custom VStack props
  vStackProps?: Partial<StackProps>;
}

export default function ColumnLayout({
  id,
  ariaLabelledBy,
  children,
  maxW = "7xl",
  minH = "100vh",
  bg,
  bgGradient,
  justifyContent = "center",
  alignItems = "center",
  spacing = { base: 8, md: 10 },
  py,
  px,
  textAlign = "center",
  borderRadius,
  shadow,
  border,
  borderColor,
  color,
  containerProps = {},
  vStackProps = {},
}: ColumnLayoutProps) {
  return (
    <Container
      as="section"
      maxW={maxW}
      id={id}
      aria-labelledby={ariaLabelledBy}
      minH={minH}
      display="flex"
      flexDirection="column"
      justifyContent={justifyContent}
      alignItems={alignItems}
      bg={bg}
      bgGradient={bgGradient}
      py={py}
      px={px}
      borderRadius={borderRadius}
      shadow={shadow}
      border={border}
      borderColor={borderColor}
      color={color}
      {...containerProps}
    >
      <VStack textAlign={textAlign} spacing={spacing} w="100%" {...vStackProps}>
        {children}
      </VStack>
    </Container>
  );
}

// Example usage
{
  /* <ColumnLayout
  containerProps={{
    bg: "blue.50",
    borderRadius: "xl",
    shadow: "lg",
    border: "2px solid",
    borderColor: "blue.200",
  }}
>
  <h1>Custom Container Styling</h1>
</ColumnLayout>;

<ColumnLayout
  vStackProps={{
    spacing: 12,
    align: "stretch", // Makes children stretch to full width
    justify: "space-between", // Distributes space between children
  }}
>
  <h1>Header</h1>
  <p>Content</p>
  <button>Footer</button>
</ColumnLayout>; */
}
