import { ReactElement } from "react";
import { FaHandshake } from "react-icons/fa";
import TextOnImage from "@/components/core/hero/TextOnImage";

const cardItems: {
  label: string;
  description: string;
  svgIcon: ReactElement;
}[] = [
  {
    label: "Connect",
    description: "Fill out a description card",
    svgIcon: <FaHandshake />,
  },
];

export default function Home() {
  return <TextOnImage />;
}
