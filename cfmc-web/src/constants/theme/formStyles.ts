export const FORM_COLORS = {
  text: "gray.800",
  label: "gray.700",
  mutedText: "gray.500",
  sectionHeader: "gray.600",
  bg: "white",
  border: "gray.200",
  focusBorder: "purple.500",
  error: "red.500",
} as const;

export const FORM_STYLES = {
  container: {
    bg: FORM_COLORS.bg,
    p: { base: 6, md: 8, lg: 10 },
    borderRadius: "2xl",
    w: "full",
    border: "1px solid",
    borderColor: FORM_COLORS.border,
    boxShadow: "lg",
    _hover: { boxShadow: "xl" },
    transition: "all 0.3s ease",
  },
  spacing: {
    main: { base: 6, md: 8 },
    section: 6,
    fields: 5,
  },
} as const;
