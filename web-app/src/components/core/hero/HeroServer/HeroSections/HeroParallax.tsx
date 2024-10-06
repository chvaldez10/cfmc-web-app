import { FC } from "react";
import { NextImage } from "@/components/core/ui";

// TODO: Clean up this component
const HeroParallax: FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Fixed background image */}
      <div className="absolute inset-0">
        <NextImage
          src="https://images.unsplash.com/photo-1541346183200-e8e117d945dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
          height="h-full"
          imageClassName=" object-center w"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="flex flex-col justify-center items-center min-h-screen text-center text-white-0 p-4">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Mission and Vision
          </h1>
          <p className="text-lg text-gray-300 mb-8">Mission and Vision</p>
        </div>

        {/* Additional content to enable scrolling */}
        <div className="min-h-screen bg-white-10 flex-center">
          <h2 className="text-4xl font-bold text-white">Scroll for More</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroParallax;
