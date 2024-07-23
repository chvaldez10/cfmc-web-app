import { ReactElement } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaChurch } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineAnnouncement } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { RiSoundModuleFill } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { PiHandsPrayingFill } from "react-icons/pi";
import { MdForum } from "react-icons/md";

export const aboutDropdownItems: {
  label: string;
  url: string;
  svgIcon: ReactElement;
}[] = [
  {
    label: "Mission and Vision",
    url: "/about/mission-and-vision",
    svgIcon: <FaBookOpen />,
  },
  {
    label: "Ministry",
    url: "/about/ministry",
    svgIcon: <FaChurch />,
  },
  {
    label: "Board",
    url: "/about/board",
    svgIcon: <MdTableRestaurant />,
  },
  {
    label: "Community",
    url: "/about/our-community",
    svgIcon: <FaPeopleCarry />,
  },
];

export const mediaDropDownItems: {
  label: string;
  url: string;
  svgIcon: ReactElement;
}[] = [
  {
    label: "Gallery",
    url: "/media/gallery",
    svgIcon: <CiImageOn />,
  },
  {
    label: "Announcements",
    url: "/media/announcements",
    svgIcon: <MdOutlineAnnouncement />,
  },
  {
    label: "Inquiries",
    url: "/media/inquiries",
    svgIcon: <HiPencilAlt />,
  },
];

export const getInvolvedDropdownItems: {
  label: string;
  url: string;
  svgIcon: ReactElement;
}[] = [
  {
    label: "Upcoming",
    url: "/get-involved/upcoming",
    svgIcon: <FaRegCalendarCheck />,
  },
  {
    label: "Bible Study",
    url: "/get-involved/bible-study",
    svgIcon: <CgNotes />,
  },
  {
    label: "Multimedia",
    url: "/get-involved/multimedia",
    svgIcon: <RiSoundModuleFill />,
  },
  {
    label: "Music",
    url: "/get-involved/music",
    svgIcon: <IoMusicalNotesOutline />,
  },
];

export const connectDropdownItem: {
  label: string;
  url: string;
  svgIcon: ReactElement;
}[] = [
  {
    label: "Email",
    url: "/connect/contact-us",
    svgIcon: <MdMarkEmailRead />,
  },
  {
    label: " Prayer",
    url: "/connect/prayer",
    svgIcon: <PiHandsPrayingFill />,
  },
  {
    label: "Forum",
    url: "/connect/forum",
    svgIcon: <MdForum />,
  },
];
