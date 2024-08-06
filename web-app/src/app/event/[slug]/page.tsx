import { HeroEvent, EventDescription } from "@/components/core/hero";
import { Box } from "@/components/core/ui";

const testDescription = `Come join us for a day of fun and learning. We will start our service at 10:00 AM and end at 4:00 PM. We will have a BBQ lunch and refreshments. Please bring a dish to share. The park is perfect for bike rides.`;

export default function page() {
  return (
    <Box containerClassName="pt-32 space-y-10">
      <HeroEvent />
      <EventDescription>{testDescription}</EventDescription>
    </Box>
  );
}
