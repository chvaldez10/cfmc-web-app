import { FC } from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl lg:mt-12 align-center">
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Church</h1>
        <p className="text-lg mb-4">
          Our mission is to serve the community with love and compassion.
        </p>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end p-6">
        <p className="text-lg mb-4">
          Our mission is to serve the community with love and compassion.
        </p>
      </div>
    </div>
  );
};

export default Hero;
