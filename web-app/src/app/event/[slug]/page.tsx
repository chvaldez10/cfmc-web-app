import { HeroEvent, Box } from "@/components/core/hero";

const heroHeaderTitle = "Event Page";
const heroHeaderVerbiage = "Event Page";

export default function page() {
  return (
    <Box className="py-32">
      <HeroEvent />
    </Box>
  );
}
