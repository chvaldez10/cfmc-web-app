/**
 * Calculates the appropriate height for sticky parallax sections.
 * Each section needs 100vh of scroll space for smooth transitions.
 * Formula: (sectionCount - 1) * 100vh + 200vh buffer for last section to unstick
 */
export const calculateParallaxHeight = (sectionCount: number): number => {
  return (sectionCount - 1) * 100 + 200;
};
