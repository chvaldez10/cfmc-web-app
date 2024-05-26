import { ReactElement } from "react";
import { MdContactMail } from "react-icons/md";
import { FaPrayingHands } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import SimpleCard from "@/components/core/cards/SimpleCard";
import HeroCollage from "@/components/core/hero/HeroCollage";
import HeroMap from "@/components/core/hero/HeroMap";
import HeroSimple from "@/components/core/hero/HeroSimple";

const cardContainerItems: {
  label: string;
  description: string;
  svgIcon: ReactElement;
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
    label: "Get Involved",
    description: "Get involved today!",
    svgIcon: <FaCalendarCheck />,
  },
];

export default function Home() {
  return (
    <>
      <HeroCollage />
      {/* <HeroMap /> */}
      <HeroSimple
        header={"Sunday Service"}
        verbiage="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        element={
          <>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.821665914685!2d-114.0807365!3d51.0932986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371658521e49643%3A0xe758ea3bb43192eb!2s419%20Northmount%20Dr%20NW%2C%20Calgary%2C%20AB%20T2K%203H7!5e0!3m2!1sen!2sca!4v1716651064489!5m2!1sen!2sca"
              width="100%"
              height="300"
              className="rounded-lg shadow-lg border-4 border-white-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-green-50"></div>
          </>
        }
      />
      <SimpleCard cardContainerItems={cardContainerItems} />
    </>
  );
}
