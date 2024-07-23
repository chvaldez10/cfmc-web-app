import { ReactElement } from "react";
import { MdContactMail } from "react-icons/md";
import { FaPrayingHands } from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";

export const cardContainerItems: {
  label: string;
  description: string;
  svgIcon: ReactElement;
  url?: string;
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
    label: "Media Inquiries",
    description: "Please submit and any media inquiries",
    svgIcon: <RiSoundModuleFill />,
  },
];
