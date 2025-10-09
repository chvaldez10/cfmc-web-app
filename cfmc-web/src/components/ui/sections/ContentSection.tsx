import { Box, Text, Heading } from "@chakra-ui/react";

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "highlighted";
  size?: "sm" | "md" | "lg";
}

export default function ContentSection({
  title,
  children,
  variant = "default",
  size = "md",
}: ContentSectionProps) {
  const textColor = "gray.700";
  const accentColor = "purple.600";
  const sectionBg = "gray.50";
  const highlightedBg = "purple.50";

  const bgColor = variant === "highlighted" ? highlightedBg : sectionBg;
  const borderColor = variant === "highlighted" ? "purple.500" : accentColor;

  const paddingMap = {
    sm: { base: 4, md: 6 },
    md: { base: 6, md: 8 },
    lg: { base: 8, md: 10 },
  };

  const headingSizeMap = {
    sm: "md",
    md: "lg",
    lg: "xl",
  };

  const textSizeMap = {
    sm: { base: "sm", md: "md" },
    md: { base: "md", md: "lg" },
    lg: { base: "lg", md: "xl" },
  };

  return (
    <Box
      bg={bgColor}
      p={paddingMap[size]}
      borderRadius="xl"
      w="full"
      borderLeft="4px solid"
      borderLeftColor={borderColor}
      transition="all 0.2s ease"
      _hover={{
        transform: variant === "highlighted" ? "translateY(-2px)" : "none",
        boxShadow: variant === "highlighted" ? "lg" : "none",
      }}
    >
      <Heading
        as="h2"
        size={headingSizeMap[size]}
        color={accentColor}
        mb={4}
        fontWeight="bold"
      >
        {title}
      </Heading>
      <Text
        fontSize={textSizeMap[size]}
        lineHeight="tall"
        color={textColor}
        fontWeight={variant === "highlighted" ? "medium" : "normal"}
      >
        {children}
      </Text>
    </Box>
  );
}
