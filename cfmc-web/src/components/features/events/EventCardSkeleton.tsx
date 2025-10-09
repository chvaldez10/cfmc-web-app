import { Box, VStack, Stack, Skeleton } from "@chakra-ui/react";

export default function EventCardSkeleton() {
  return (
    <Box width="100%" height="100%">
      <VStack spacing={4} height="100%">
        {/* Image Skeleton - matches EventImage height */}
        <Skeleton
          width="100%"
          height="200px"
          borderRadius="lg"
          startColor="gray.100"
          endColor="gray.300"
        />

        {/* Details Skeleton - matches EventDetails */}
        <Stack
          p={4}
          spacing={3}
          width="100%"
          height={{ base: "180px", md: "200px" }}
          borderBottomWidth="1px"
          borderColor="gray.200"
          boxShadow="md"
        >
          {/* Event Name */}
          <Skeleton height="28px" width="80%" />

          {/* Description - 3 lines */}
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="95%" />
          <Skeleton height="16px" width="70%" />

          {/* Date */}
          <Skeleton height="16px" width="50%" mt="auto" />
        </Stack>
      </VStack>
    </Box>
  );
}
