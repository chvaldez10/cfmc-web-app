import { IconProps } from "@/types/uiProps";
import { FaDove, FaCross } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

/** Methodist Church Description */
export const methodistChurchDescription =
  "Methodism, 18th-century movement founded by John Wesley that sought to reform the Church of England from within. The movement, however, became separate from its parent body and developed into an autonomous church. The World Methodist Council (WMC), an association of churches in the Methodist tradition, comprises more than 40.5 million Methodists in 138 countries.";

export const methodistSymbols: IconProps[] = [
  {
    label: "Flame",
    svgIcon: <FaCross size={32} />,
    description:
      "The cross teaches us that forgiveness takes sacrifice even on our part toward others.",
    url: "",
  },
  {
    label: "Dove",
    svgIcon: <FaDove size={32} />,
    description:
      "The dove represents God's Holy spirit coming down to waiting people. The three long picture panels tell the life of Jesus. At the upper left is his birth and at the lower left is Jesus with the children.",
    url: "",
  },
  {
    label: "Globe",
    svgIcon: <CiGlobe size={32} />,
    description:
      "The globe (on which the cross and flame are superimposed) alludes to John Wesley's dictum for Methodist believers: 'The world is my parish' representing the missional purpose of the Church.",
    url: "",
  },
];
