import SimpleCard from "@/components/core/cards/SimpleCard";
import HeroCollage from "@/components/core/hero/HeroCollage";
import HeroSimple from "@/components/core/hero/HeroSimple";
import IframeMap from "@/data/hero/IframeMap";
import { cardContainerItems } from "@/data/hero/CardContainer";

export default function Home() {
  return (
    <>
      <HeroCollage />
      <HeroSimple
        header={"Sunday Service"}
        verbiage="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        element={<IframeMap />}
        backgroundColor="bg-neutral-50"
      />
      <SimpleCard cardContainerItems={cardContainerItems} />
    </>
  );
}
