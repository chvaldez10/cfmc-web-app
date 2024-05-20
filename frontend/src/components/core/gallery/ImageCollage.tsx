import { FC } from "react";
import Image from "next/image";

const images = [
  "/featured/header/1.jpeg",
  "/featured/header/2.jpeg",
  "/featured/header/3.jpeg",
  "/featured/header/4.jpeg",
];

const ImageCollage: FC<{}> = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center p-5 lg:py-12 lg:px-32 bg-gradient-to-r from-violet-400 to-purple-300">
      {/* Collage column */}
      <div className="grid grid-cols-2 grid-rows-3 gap-2 lg:gap-4 w-full lg:w-2/3">
        {/* Image 1 which takes up 2 columns */}
        <div className="relative col-span-2 row-span-1 h-48 lg:h-64">
          <Image
            src={images[1]}
            alt="featured image 0"
            fill={true}
            sizes="(max-width: 2048px)"
            style={{ objectFit: "cover" }}
            className="rounded-lg object-bottom"
          />
        </div>
        <div className="relative col-span-1 row-span-2 h-full">
          <Image
            src={images[0]}
            alt="featured image 2"
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded-lg object-bottom"
          />
        </div>
        <div className="relative col-span-1 row-span-1 h-48 lg:h-64">
          <Image
            src={images[2]}
            alt="featured image 0"
            fill={true}
            sizes="(max-width: 2048px)"
            style={{ objectFit: "cover" }}
            className="rounded-lg object-bottom"
          />
        </div>
        <div className="relative col-span-1 row-span-1 h-48 lg:h-64">
          <Image
            src={images[3]}
            alt="featured image 0"
            fill={true}
            sizes="(max-width: 2048px)"
            style={{ objectFit: "cover" }}
            className="rounded-lg object-bottom"
          />
        </div>
      </div>

      {/* Text column */}
      <div className="w-full lg:ml-12 lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left text-white-0">
        <h2 className="text-4xl font-bold mb-4">Pentecost Sunday</h2>
        <p className="text-lg mb-4">
          To lead with new life of faith, trust, love and obedience to Jesus
          Christ.
        </p>
        <button className="bg-violet-100 text-white px-6 py-3 rounded-lg shadow-md hover:bg-violet-200 transition duration-300 text-gray-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ImageCollage;
