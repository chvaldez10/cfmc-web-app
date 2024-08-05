import { HeroHeader, HeroEvent } from "@/components/core/hero";

const heroHeaderTitle = "Event Page";
const heroHeaderVerbiage = "Event Page";

export default function page() {
  return (
    <>
      {/* <HeroHeader title={heroHeaderTitle} verbiage={heroHeaderVerbiage} /> */}
      <HeroEvent />
    </>
  );
}
