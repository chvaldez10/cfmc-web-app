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
      "Involved in music-related ministries in the church, including soundboard control, audio recording, music performance, and audio troubleshooting.",
    svgIcon: <IoMusicalNotesOutline className="w-12 h-12" />,
    url: "",
  },
  {
    label: "Presentation",
    svgIcon: <FaYoutube className="w-12 h-12" />,
    description:
      "Involved in video and presentation-related ministries in the church, creating presentations and troubleshooting video issues.",
    url: "",
  },
  {
    label: "Web Design",
    svgIcon: <TbWorldWww className="w-12 h-12" />,
    description:
      "Known for handling unique web design projects, including developing and designing the website.",
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
