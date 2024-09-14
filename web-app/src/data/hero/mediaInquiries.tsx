import { MdContactMail, MdCoPresent } from "react-icons/md";
import {
  FaPrayingHands,
  FaYoutube,
  FaUserFriends,
  FaBrain,
} from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";
import { IconProps } from "@/types/uiProps";
import { TbWorldWww } from "react-icons/tb";
import { IoMusicalNotesOutline } from "react-icons/io5";

export const cardInquiries: IconProps[] = [
  {
    label: "Connect",
    description: "Fill out a description card",
    svgIcon: <MdContactMail className="w-24 h-24 mb-4" />,
    url: "",
  },
  {
    label: "Prayer",
    description: "Send us your prayer request",
    svgIcon: <FaPrayingHands className="w-24 h-24 mb-4" />,
    url: "",
  },
  {
    label: "Media",
    description: "Please submit and any media inquiries",
    svgIcon: <RiSoundModuleFill className="w-24 h-24 mb-4" />,
    url: "",
  },
];

export const mediaInquiries: IconProps[] = [
  {
    label: "Music",
    description:
      "The multimedia team is involved in all music-related ministries in the church, whether it involves controlling the soundboard, recording audio, playing music, or troubleshooting audio-related issues.",
    svgIcon: <IoMusicalNotesOutline className="w-12 h-12" />,
    url: "",
  },
  {
    label: "Presentation",
    svgIcon: <FaYoutube className="w-12 h-12" />,
    description:
      "The multimedia team is involved in all video and presentation-related ministries in the church. We piece videos and images together, create stunning presentations, and troubleshoot video-related issues.",
    url: "",
  },
  {
    label: "Web Design",
    svgIcon: <TbWorldWww className="w-12 h-12" />,
    description:
      "Additionally, the multimedia team is known for handling unique projects. We developed and designed this website from scratch. We're still working on it, so expect more updates in the future.",
    url: "",
  },
];

export const whyJoinTheMultimediaTeam: IconProps[] = [
  {
    label: "Have Fun While You Serve",
    svgIcon: (
      <RiSoundModuleFill className="w-6 h-6" style={{ color: "#22c55e" }} />
    ),
    description: "",
    url: "",
  },
  {
    label: "Meet New Friends",
    svgIcon: <FaUserFriends className="w-6 h-6" style={{ color: "#a855f7" }} />,
    description: "",
    url: "",
  },
  {
    label: "Be Creative",
    svgIcon: <FaBrain className="w-6 h-6" style={{ color: "#facc15" }} />,
    description: "",
    url: "",
  },
];

export const multimediaInquiries: IconProps[] = [
  {
    label: "Music",
    svgIcon: (
      <IoMusicalNotesOutline className="w-6 h-6" style={{ color: "#a855f7" }} />
    ),
    description: "",
    url: "",
  },
  {
    label: "Presentation",
    svgIcon: <FaYoutube className="w-6 h-6" style={{ color: "#ef4444" }} />,
    description: "",
    url: "",
  },
  {
    label: "Web Design",
    svgIcon: <TbWorldWww className="w-6 h-6" style={{ color: "#60a5fa" }} />,
    description: "",
    url: "",
  },
];
