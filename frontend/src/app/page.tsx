import { ReactElement } from "react";
import { MdContactMail } from "react-icons/md";
import { FaPrayingHands } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import SimpleCard from "@/components/core/cards/SimpleCard";
import HeroCollage from "@/components/core/hero/HeroCollage";

const cardContainerItems: {
  label: string;
  description: string;
  svgIcon: ReactElement;
}[] = [
  {
    label: "Connect",
    description: "Fill out a description card",
    svgIcon: <MdContactMail />,
  },
  {
    label: "Pray",
    description: "Send us your prayer request",
    svgIcon: <FaPrayingHands />,
  },
  {
    label: "Get Involved",
    description: "Get involved today!",
    svgIcon: <FaCalendarCheck />,
  },
];

export default function Home() {
  return (
    <>
      <HeroCollage />
      <SimpleCard cardContainerItems={cardContainerItems} />
    </>
  );
}
