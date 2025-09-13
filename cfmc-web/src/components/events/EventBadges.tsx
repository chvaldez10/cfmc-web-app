import { HStack, Badge } from "@chakra-ui/react";

interface EventBadgeProps {
  category: string;
  tags: string[];
}

function EventBadges({ category, tags }: EventBadgeProps) {
  return (
    <HStack wrap="wrap" spacing={3}>
      <Badge
        colorScheme="purple"
        fontSize="sm"
        px={4}
        py={2}
        borderRadius="full"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wide"
      >
        {category}
      </Badge>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          colorScheme="gray"
          fontSize="sm"
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
