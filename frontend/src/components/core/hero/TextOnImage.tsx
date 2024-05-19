import Image from "next/image";
import { FaRegSmile, FaLeaf, FaSeedling } from "react-icons/fa";

const TextOnImage: React.FC<{}> = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-7xl align-center">
      {/* Image Column */}
      <div className="hidden lg:block w-full h-64 lg:w-576 lg:h-576 lg:ml-6">
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
      <div className="relative max-w-lg md:max-w-2xl md:shadow-lg md:absolute lg:w-3/5 lg:left-0 lg:ml-20 xl:ml-12 z-10 bg-white-0">
        <div className="flex flex-col p-12 md:px-16 my-6">
          <h2 className="text-2xl font-bold lg:text-4xl text-center">
            Welcome to Our Church
          </h2>
          <div className="mt-4 text-xl">
            <p className="font-semibold">Mission Statement</p>
            <p>
              To <span className="font-semibold"> share</span> the good news of
              God’s love. To
              <span className="font-semibold"> lead</span> with a new life of
              <span className=""> faith, trust, love, and obedience.</span> To
              <span className="font-semibold"> nurture</span> to become
              Christ-like in their lives.
            </p>
          </div>
          <div className="mt-4 text-xl">
            <p className="font-semibold">
              Sundays 2:00 PM | 419 Northmount Drive NW, Calgary, AB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextOnImage;
