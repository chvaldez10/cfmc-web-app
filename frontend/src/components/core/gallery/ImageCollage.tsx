import { FC } from "react";
import ImageCollageItem from "./ImageCollageItem";

const featuredImages = [
  {
    src: "/featured/header/2.jpeg",
    alt: "featured image 1",
    containerClassName: "col-span-2 row-span-1 h-40 lg:h-48",
  },
  {
    src: "/featured/header/1.jpeg",
    alt: "featured image 2",
    containerClassName: "col-span-1 row-span-2",
  },
  {
    src: "/featured/header/3.jpeg",
    alt: "featured image 3",
    containerClassName: "col-span-1 row-span-1 h-40 lg:h-48",
  },
  {
    src: "/featured/header/4.jpeg",
    alt: "featured image 4",
    containerClassName: "col-span-1 row-span-1 h-40 lg:h-48",
  },
];

const ImageCollage: FC<{}> = () => {
  return (
    <div className="w-full bg-purple-50">
      <div
        className="mx-auto lg:max-w-5xl xl:max-w-6xl flex flex-col-reverse md:flex-row items-center p-5 md:px-16"
        style={{ height: "80vh" }}
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

        <div className="w-full md:ml-12 md:w-1/3 flex flex-col items-center text-center md:text-left">
          <h2 className="text-4xl font-bold my-4 bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-lg p-4 bg-purple-100 text-gray-600 border-r-4 border-l-4 border-purple-500 shadow-lg rounded-md mb-4 md:m-0">
            To lead with new life of faith, trust, love, and obedience to Jesus
            Christ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
