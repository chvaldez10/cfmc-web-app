import { MdContactMail } from "react-icons/md";
import { FaPrayingHands, FaYoutube } from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";
import { CardInquiry } from "@/types/genericTypes";
import { TbWorldWww } from "react-icons/tb";
import { IoMusicalNotesOutline } from "react-icons/io5";

export const cardInquiries: CardInquiry[] = [
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

export const mediaInquiries: CardInquiry[] = [
  {
    label: "Music",
    description:
      "The multimedia team is involved in all music-related ministries in the church, whether it involves controlling the soundboard, recording audio, playing music, or troubleshooting audio-related issues.",
    svgIcon: <IoMusicalNotesOutline className="w-12 h-12" />,
  },
  {
    label: "Presentation",
    svgIcon: <FaYoutube className="w-12 h-12" />,
    description:
      "The multimedia team is involved in all video and presentation-related ministries in the church. We piece videos and images together, create stunning presentations, and troubleshoot video-related issues.",
  },
  {
    label: "Web Design",
    svgIcon: <TbWorldWww className="w-12 h-12" />,
    description:
      "Additionally, the multimedia team is known for handling unique projects. We developed and designed this website from scratch. We're still working on it, so expect more updates in the future.",
  },
];
