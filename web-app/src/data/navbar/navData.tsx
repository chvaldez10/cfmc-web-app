import { NavbarProps } from "@/types/componentProps";

import {
  FaBookOpen,
  FaChurch,
  FaPeopleCarry,
  FaRegCalendarCheck,
} from "react-icons/fa";
import {
  MdTableRestaurant,
  MdOutlineAnnouncement,
  MdForum,
} from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { RiSoundModuleFill } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

export const aboutDropdownItems: NavbarProps[] = [
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
    label: "Leadership",
    url: "/about/board-and-leadership",
    svgIcon: <MdTableRestaurant />,
  },
  {
    label: "Community",
    url: "/about/our-community",
    svgIcon: <FaPeopleCarry />,
  },
];

export const mediaDropDownItems: NavbarProps[] = [
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

export const getInvolvedDropdownItems: NavbarProps[] = [
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

export const connectDropdownItem: NavbarProps[] = [
  {
    label: "Contact Us",
    url: "/connect/contact-us",
    svgIcon: <IoIosMail />,
  },
  {
    label: "Forum",
    url: "/connect/forum",
    svgIcon: <MdForum />,
  },
];
