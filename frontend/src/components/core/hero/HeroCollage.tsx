import { FC } from "react";
import ImageCollageItem from "@/components/core/gallery/ImageCollageItem";
import { featuredImages } from "./featuredItems";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";

const HeroCollage: FC = () => {
  return (
    <div className="w-full mx-auto p-5 md:p-0 items-center justify-center md:w-11/12 flex flex-col-reverse gap-4 lg:gap-7 h-screen">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Image Column */}
      <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-5 w-full z-10">
        {featuredImages.map((featuredImage, index) => (
          <ImageCollageItem
            key={index}
            src={featuredImage.src}
            alt={featuredImage.alt}
            containerClassName={featuredImage.containerClassName}
          />
        ))}
      </div>

      {/* Text Column */}
      <div className="w-full flex flex-col items-center text-center md:text-left z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">
          Our Mission
        </h2>
        <p className="text-base lg:text-xl p-4 bg-violet-50 text-gray-600 border-r-4 border-l-4 border-purple-500 shadow-lg rounded-md mb-4 md:mb-0">
          To lead with new life of{" "}
          <span className="italic"> faith, trust, love, and obedience </span>
          to Jesus Christ.
        </p>
      </div>
    </div>
  );
};

export default HeroCollage;
