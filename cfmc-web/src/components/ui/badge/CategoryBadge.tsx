import { Badge, BadgeProps } from "@chakra-ui/react";

interface CategoryBadgeProps extends Omit<BadgeProps, "colorScheme"> {
  colorScheme: string;
  label: string;
}

export const CategoryBadge = ({
  colorScheme,
  label,
  ...rest
}: CategoryBadgeProps) => {
  return (
    <Badge
      colorScheme={colorScheme}
      fontSize={{ base: "xs", md: "sm" }}
      px={3}
      py={1}
      borderRadius="full"
      fontWeight="semibold"
      {...rest}
    >
      {label}
    </Badge>
  );
};
