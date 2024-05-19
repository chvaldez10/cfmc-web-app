"use client";

import Image from "next/image";
import PurplePillButton from "@/components/core/buttons/PurplePillButton";

const TextOnImage: React.FC<{}> = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl lg:mt-12">
      {/* Image Column */}
      <div className="hidden lg:block lg:w-576 lg:h-576 w-full h-full">
        <Image
          src="/background/Bible_with_leaf_resized.jpg"
          alt="tmp image"
          width={1920}
          height={576}
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>

      {/* Text Column */}
      <div className="relative max-w-lg md:max-w-2xl md:absolute lg:w-3/5 lg:left-0 lg:ml-10 xl:ml-12 z-10 bg-white-0 lg:shadow-lg lg:rounded-lg">
        <div className="flex flex-col p-4 md:p-6 lg:p-12">
          {/* Header */}
          <h2 className="text-2xl font-bold lg:text-4xl text-center">
            Welcome to Our Church
          </h2>

          {/* Mission Statement */}
          <div className="mt-4 text-xl">
            <p className="font-semibold">Mission Statement</p>
            <p>
              To <span className="font-semibold">share</span> the good news of
              God’s love. To
              <span className="font-semibold"> lead</span> with a new life of
              <span className="font-semibold">
                {" "}
                faith, trust, love, and obedience.
              </span>{" "}
              To
              <span className="font-semibold"> nurture</span> to become
              Christ-like in their lives.
            </p>
          </div>

          {/* Service Time */}
          <div className="mt-4 text-xl">
            <p className="font-semibold">
              Sundays 2:00 PM | 419 Northmount Drive NW, Calgary, AB
            </p>
          </div>

          {/* Button */}
          <PurplePillButton
            text="Join Us Sunday"
            onClick={() => console.log("Join Us Sunday Clicked")}
            variant="filled"
            className="md:hidden mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default TextOnImage;
