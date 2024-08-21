import { FC } from "react";
import { mediaInquiries } from "@/data/hero/";

interface TimelineItem {
  icon: React.ElementType;
  header: string;
  description: string;
}

const VerticalTimeline: FC = () => {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      {mediaInquiries.map((item, index) => (
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
              {/* <div className="w-12 h-12"> */}
              {item.svgIcon}
              {/* </div> */}
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                {item.label}
              </h2>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
