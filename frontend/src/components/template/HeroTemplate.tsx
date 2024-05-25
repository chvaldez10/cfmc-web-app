import { FC } from "react";

const HeroTemplate: React.FC = () => {
  return (
    <div className="w-full bg-neutral-50">
      <div className="relative flex flex-col items-center mx-auto md:flex-row lg:max-w-5xl xl:max-w-6xl align-center p-4 lg:p-8">
        {/* Text Column */}
        <div className="flex-1 flex flex-col justify-center items-center text-center  p-4 lg:p-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-600">
            Header
          </h2>
          <p className="text-base lg:text-lg text-gray-600 w-3/4 md:w-full">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </p>
        </div>

        <div className="flex-1 flex justify-center p-4 lg:p-6">
          <p className="text-lg">
            Our mission is to serve the community with love and compassion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroTemplate;
