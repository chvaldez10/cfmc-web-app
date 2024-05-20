"use client";

import { FC } from "react";
import Image from "next/image";
import PurplePillButton from "../buttons/PurplePillButton";

const images = [
  "/featured/header/1.jpeg",
  "/featured/header/2.jpeg",
  "/featured/header/3.jpeg",
  "/featured/header/4.jpeg",
];

const ImageCollage: FC<{}> = () => {
  return (
    <div
      className="mx-auto flex flex-col md:flex-row items-center p-5 md:px-16  backdrop-blur-2xl bg-gradient-to-r from-violet-50 via-slate-50 to-purple-50"
      style={{ height: "90vh" }}
    >
      <div className="grid grid-cols-2 grid-rows-3 gap-2 md:gap-4 w-full md:w-2/3">
        <div className="relative col-span-2 row-span-1 h-40 lg:h-48">
          <Image
            src={images[1]}
            alt="featured image 0"
            fill={true}
            sizes="(max-width: 2048px)"
            style={{ objectFit: "cover" }}
            className="rounded-lg object-bottom xl:object-center animate-fadeIn"
          />
        </div>
        <div className="relative col-span-1 row-span-2">
          <Image
            src={images[0]}
            alt="featured image 1"
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded-lg object-bottom 2xl:object-center animate-fadeIn"
          />
        </div>
        <div className="relative col-span-1 row-span-1 h-40 lg:h-48 ">
          <Image
            src={images[2]}
            alt="featured image 2"
            fill={true}
            sizes="(max-width: 2048px)"
            style={{ objectFit: "cover" }}
            className="rounded-lg object-bottom 2xl:object-center animate-fadeIn"
          />
        </div>
        <div className="relative col-span-1 row-span-1 h-40 lg:h-48">
          <Image
            src={images[3]}
            alt="featured image 3"
            fill={true}
            sizes="(max-width: 2048px)"
            style={{ objectFit: "cover" }}
            className="rounded-lg object-bottom 2xl:object-bottom-left animate-fadeIn"
          />
        </div>
      </div>

      <div className="w-full md:ml-12 md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">Pentecost Sunday</h2>
        <p className="text-lg mb-4">
          To lead with new life of faith, trust, love, and obedience to Jesus
          Christ.
        </p>
        <PurplePillButton
          text={"Learn More"}
          onClick={() => console.log("Learn More button clicked")}
          variant={"outline"}
        />
      </div>
    </div>
  );
};

export default ImageCollage;
