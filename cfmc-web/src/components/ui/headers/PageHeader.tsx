"use client";

import {
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Box,
  ResponsiveValue,
} from "@chakra-ui/react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
  height?: string | number;
}

export default function PageHeader({
  title,
  subtitle,
  size = "lg",
  align = "center",
  height = "50vh",
}: PageHeaderProps) {
  const titleColor = useColorModeValue("gray.800", "white");
  const subtitleColor = useColorModeValue("gray.600", "gray.300");

  const alignmentMap: Record<
    NonNullable<PageHeaderProps["align"]>,
    ResponsiveValue<string>
  > = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  return (
    <Box
      position="relative"
      w="full"
      borderRadius="3xl"
      h={height}
      overflow="hidden"
      role="presentation"
      aria-hidden="true"
      sx={{
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          borderRadius: "3xl",
          background: `
            radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.25) 0%, transparent 60%),
            radial-gradient(circle at 60% 60%, rgba(139, 92, 246, 0.22) 0%, transparent 55%),
            radial-gradient(circle at 70% 30%, rgba(192, 132, 252, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(233, 213, 255, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.18) 0%, transparent 70%)
          `,
          filter: "blur(12px)",
          pointerEvents: "none",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        },
      }}
    >
      <VStack
        spacing={4}
        align={alignmentMap[align]}
        w="full"
        position="relative"
        zIndex={1}
        justifyContent="center"
        h="full"
        px={4}
      >
        <Heading
          as="h1"
          size={size}
          textAlign={align}
          color={titleColor}
          fontWeight="extrabold"
          lineHeight="short"
          letterSpacing="-0.5px"
          textShadow="0 2px 4px rgba(0,0,0,0.1)"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        >
          {title}
        </Heading>

        {subtitle && (
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            textAlign={align}
            color={subtitleColor}
            maxW="3xl"
            lineHeight="tall"
            fontWeight="medium"
            mt={2}
            px={{ base: 2, md: 0 }}
            textShadow="0 1px 2px rgba(0,0,0,0.05)"
          >
            {subtitle}
          </Text>
        )}
      </VStack>
    </Box>
  );
}
