import { IconProps } from "@/types/uiProps";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaDove } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

/** Methodist Church Description */
export const methodistChurchDescription =
  "Methodism, 18th-century movement founded by John Wesley that sought to reform the Church of England from within. The movement, however, became separate from its parent body and developed into an autonomous church. The World Methodist Council (WMC), an association of churches in the Methodist tradition, comprises more than 40.5 million Methodists in 138 countries.";

export const methodistSymbols: IconProps[] = [
  {
    label: "Flame",
    svgIcon: <FaFireFlameCurved className="w-12 h-12" />,
    description:
      "The flame is a reminder of Pentecost when witnesses were unified by the power of the Holy Spirit and saw “tongues, as of fire.",
    url: "",
  },
  {
    label: "Dove",
    svgIcon: <FaDove className="w-12 h-12" />,
    description:
      "The dove represents God's Holy spirit coming down to waiting people. The three long picture panels tell the life of Jesus. At the upper left is his birth and at the lower left is Jesus with the children.",
    url: "",
  },
  {
    label: "Globe",
    svgIcon: <CiGlobe className="w-12 h-12" />,
    description:
      "The globe (on which the cross and flame are superimposed) alludes to John Wesley's dictum for Methodist believers: 'The world is my parish' representing the missional purpose of the Church.",
    url: "",
  },
];
