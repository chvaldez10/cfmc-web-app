import Image from "next/image";

const HeroOverlappingImage: React.FC<{}> = () => {
  return (
    <div className="relative flex flex-col justify-center items-center align-center mx-auto lg:flex-row-reverse lg:max-w-5xl h-screen">
      {/* Image Column */}
      <div className="hidden w-576 h-576 lg:block lg:ml-auto">
        <Image
          src="/background/Bible_with_leaf_resized.jpg"
          alt="tmp image"
          width={576}
          height={576}
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>

      {/* Text Column */}
      <div className="relative md:absolute max-w-lg md:max-w-2xl lg:left-0 z-10 bg-white-0 lg:shadow-lg lg:rounded-lg">
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

export default HeroOverlappingImage;
