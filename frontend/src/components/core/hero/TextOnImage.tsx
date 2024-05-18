import Image from "next/image";

const TextOnImage: React.FC<{}> = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl align-center">
      {/* Image Column */}
      <div className="hidden lg:block w-full h-64 lg:w-1/2 lg:h-576">
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
      <div className="relative max-w-lg md:max-w-2xl md:shadow-lg md:absolute lg:w-3/5 lg:left-0 lg:ml-20 xl:ml-12 z-50 bg-white-0">
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16 text-center">
          <h2 className="text-2xl font-medium  lg:text-4xl">Our Mission</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li className="font-medium">Spread the Good News</li>
            <li className="font-medium">Lead to New Life</li>
            <li className="font-medium">Nurture Growth</li>
          </ul>
          <div className="mt-8 text-gray-800">
            <p className="text-lg">2:00 PM | Sunday</p>
            <p className="text-lg">419 Northmount Drive NW, Calgary, AB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextOnImage;
