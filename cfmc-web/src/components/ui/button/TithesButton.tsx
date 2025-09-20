"use client";

import { Button, useBreakpointValue } from "@chakra-ui/react";
import { PublicLabels } from "@/constants/shared/enums";

interface TithesButtonProps {
  onClick: () => void;
  buttonHeight?: string;
}

const TithesButton = ({
  onClick,
  buttonHeight = "40px",
}: TithesButtonProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    // Mobile: Floating Action Button
    return (
      <Button
        onClick={onClick}
        position="fixed"
        bottom={6}
        right={6}
        zIndex={999}
        borderRadius="full"
        size="lg"
        colorScheme="purple"
        boxShadow="xl"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "2xl",
        }}
        transition="all 0.2s ease-in-out"
        fontSize="sm"
        fontWeight={600}
        px={6}
      >
        {PublicLabels.GIVE}
      </Button>
    );
  }

  // Desktop: Navbar Button
  return (
    <Button
      onClick={onClick}
      display="inline-flex"
      fontSize="sm"
      fontWeight={600}
      color="white"
      bg="purple.600"
      _hover={{
        bg: "purple.500",
      }}
      borderRadius="full"
      height={buttonHeight}
    >
      {PublicLabels.TITHES_AND_OFFERINGS}
    </Button>
  );
};

export default TithesButton;
