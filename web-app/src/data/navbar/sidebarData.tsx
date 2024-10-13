import { NavbarProps } from "@/types/componentProps";
import { FaTicketAlt } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";

export const sidebarItems: NavbarProps[] = [
  {
    label: "Events",
    url: "/dashboard/events",
    svgIcon: <FaTicketAlt />,
  },
  {
    label: "Members",
    url: "/dashboard/members",
    svgIcon: <IoMdPeople />,
  },
];
