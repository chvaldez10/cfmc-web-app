import { FC } from "react";
import ImageCollageItem from "@/components/core/gallery/ImageCollageItem";
import { featuredImages } from "./featuredItems";

const HeroCollage: FC<{}> = () => {
  return (
    <div className="w-full bg-purple-50">
      <div
        className="mx-auto p-5 items-center justify-center lg:max-w-5xl xl:max-w-6xl flex flex-col-reverse md:flex-row lg:py-8 md:px-16 gap-4"
        style={{ height: "90vh" }}
      >
        <div className="grid grid-cols-2 grid-rows-3 gap-2 md:gap-4 w-full md:w-2/3">
          {featuredImages.map((featuredImage, index) => (
            <ImageCollageItem
              key={index}
              src={featuredImage.src}
              alt={featuredImage.alt}
              containerClassName={featuredImage.containerClassName}
            />
          ))}
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center text-center md:text-left">
          <h2 className="text-4xl font-bold my-4 bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="w-full md:w-3/4 text-base p-4 bg-purple-100 text-gray-600 border-r-4 border-l-4 border-purple-500 shadow-lg rounded-md mb-4 md:mb-0">
            To lead with new life of{" "}
            <span className="italic"> faith, trust, love, and obedience </span>
            to Jesus Christ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCollage;
