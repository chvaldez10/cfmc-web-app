import { FC } from "react";
import { FaUserFriends } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

interface TimelineItem {
  icon: React.ElementType;
  header: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    icon: IoMusicalNotesOutline,
    header: "Music",
    description:
      "The multimedia team is involved in all music-related ministries in the church, whether it involves controlling the soundboard, recording audio, playing music, or troubleshooting audio-related issues.",
  },
  {
    icon: FaYoutube,
    header: "Presentation",
    description:
      "The multimedia team is involved in all video and presentation-related ministries in the church. We piece videos and images together, create stunning presentations, and troubleshoot video-related issues.",
  },
  {
    icon: TbWorldWww,
    header: "Web Design",
    description:
      "Additionally, the multimedia team is known for handling unique projects. We developed and designed this website from scratch. We're still working on it, so expect more updates in the future.",
  },
];

const VerticalTimeline: FC = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto "
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm text-white-0">
              {index + 1}
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-purple-100 text-purple-500 rounded-full inline-flex items-center justify-center">
                <item.icon className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {item.header}
                </h2>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalTimeline;
