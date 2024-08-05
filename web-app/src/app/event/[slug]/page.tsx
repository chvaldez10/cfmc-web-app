import { HeroEvent } from "@/components/core/hero";
import { Box } from "@/components/core/ui";

const heroHeaderTitle = "Event Page";
const heroHeaderVerbiage = "Event Page";

export default function page() {
  return (
    <Box className="py-32">
      <HeroEvent />
    </Box>
  );
}
