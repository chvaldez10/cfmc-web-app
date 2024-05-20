// components/ImageCollage.tsx
import React from "react";

const images = [
  "https://www.tailwindtap.com/assets/components/gallery/image1.jpg",
  "https://www.tailwindtap.com/assets/components/gallery/image2.jpg",
  "https://www.tailwindtap.com/assets/components/gallery/image7.jpg",
  "https://www.tailwindtap.com/assets/components/gallery/image9.jpg",
];

const ImageCollage: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start p-5 lg:py-12 lg:px-32 bg-gradient-to-r from-violet-400 to-purple-300">
      <div className="grid grid-cols-2 grid-rows-3 gap-2 lg:gap-4 w-full lg:w-2/3">
        <div className="relative col-span-2 row-span-1 h-48 lg:h-64">
          <img
            alt="gallery image 1"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={images[0]}
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-12 w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left text-white-0">
        <h2 className="text-4xl font-bold mb-4">I am header</h2>
        <p className="text-lg mb-8">
          Join our dynamic team and help us make a difference in the world. We
          value people and their unique contributions.
        </p>
        <button className="bg-violet-100 text-white px-6 py-3 rounded-lg shadow-md hover:bg-violet-200 transition duration-300 text-gray-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ImageCollage;
