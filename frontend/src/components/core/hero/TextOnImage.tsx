import Image from "next/image";

const TextOnImage: React.FC<{}> = () => {
  return (
    <div
      className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl lg:mt-12 align-center"
      style={{ height: "70vh" }}
    >
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
          <h2 className="text-3xl font-extrabold lg:text-5xl text-center text-gray-800">
            Welcome to Our Church
          </h2>

          {/* Mission Statement */}
          <div className="mt-6 text-lg lg:text-xl text-gray-700 leading-relaxed">
            <p className="font-semibold text-2xl lg:text-3xl text-gray-900">
              Mission Statement
            </p>
            <p className="mt-2">
              To <span className="font-semibold text-green-70">reach out</span>{" "}
              to as many people as we possibly can to share with them the good
              news of God’s redeeming love in Jesus Christ. To
              <span className="font-semibold text-green-70"> lead</span> them to
              that new life of
              <span className="italic text-gray-900">
                {" "}
                faith, trust, love, and obedience
              </span>{" "}
              to Jesus Christ. To
              <span className="font-semibold text-green-70">
                {" "}
                continue nurturing
              </span>{" "}
              them to become Christ-like in their lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextOnImage;
