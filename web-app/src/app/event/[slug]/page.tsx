import {
  HeroEvent,
  EventDescription,
  EventGoogleMaps,
} from "@/components/core/hero";
import { Box } from "@/components/core/ui";

const testDescription = `Come join us for a day of fun and learning. We will start our service at 10:00 AM and end at 4:00 PM. We will have a BBQ lunch and refreshments. Please bring a dish to share. The park is perfect for bike rides.`;

const testLocation =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12511.80801931074!2d-114.1458954313972!3d50.98835065044325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371718308df2bf7%3A0xef6de6c2b6201731!2sNorth%20Glenmore%20Park!5e0!3m2!1sen!2sca!4v1722910530341!5m2!1sen!2sca";

export default function page() {
  return (
    <Box containerClassName="py-32 space-y-10">
      <HeroEvent />
      <EventDescription>{testDescription}</EventDescription>
      <EventGoogleMaps eventLocation={testLocation} />
    </Box>
  );
}
