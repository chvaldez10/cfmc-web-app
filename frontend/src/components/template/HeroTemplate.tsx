import { FC } from "react";

const HeroTemplate: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl xl:max-w-6xl align-center">
      <div className="flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left p-6">
        <h1 className="text-4xl font-bold mb-4">Header</h1>
        <p className="text-lg mb-4">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </p>
      </div>

      <div className="flex-1 justify-center lg:justify-end p-6">
        <p className="text-lg">
          Our mission is to serve the community with love and compassion.
        </p>
      </div>
    </div>
  );
};

export default HeroTemplate;
