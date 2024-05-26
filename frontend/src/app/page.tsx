import SimpleCard from "@/components/core/cards/SimpleCard";
import HeroCollage from "@/components/core/hero/HeroCollage";
import HeroSimple from "@/components/core/hero/HeroSimple";
import IframeMap from "@/data/hero/IframeMap";
import { cardContainerItems } from "@/data/hero/CardContainer";
import CardWithImage from "@/components/core/cards/CardWithImage";

export default function Home() {
  return (
    <>
      <HeroCollage />
      <HeroSimple
        key={"Hero Map"}
        header={"Sunday Service"}
        verbiage="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        element={<IframeMap />}
        backgroundColor="bg-neutral-50"
      />

      <SimpleCard cardContainerItems={cardContainerItems} />

      {/* <div className="container mx-auto p-4"> */}
      {/* <CardWithImage
          src="/featured/header/14.jpeg"
          title="title"
          description="I am description"
          link="/about/ministry"
        /> */}
      {/* </div> */}
    </>
  );
}
