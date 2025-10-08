import { HStack, Badge } from "@chakra-ui/react";
import { CategoryBadge } from "@/components/ui/badge";

interface EventBadgeProps {
  category: string;
  tags: string[];
  categoryColorScheme?: string;
}

function EventBadges({
  category,
  tags,
  categoryColorScheme = "purple",
}: EventBadgeProps) {
  return (
    <HStack wrap="wrap" spacing={3}>
      <CategoryBadge
        colorScheme={categoryColorScheme}
        label={category}
        textTransform="uppercase"
        letterSpacing="wide"
        px={4}
        py={2}
      />
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          colorScheme="gray"
          fontSize={{ base: "xs", md: "sm" }}
          px={3}
          py={1}
          borderRadius="full"
          fontWeight="medium"
        >
          #{tag}
        </Badge>
      ))}
    </HStack>
  );
}

export default EventBadges;
