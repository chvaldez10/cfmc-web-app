import { FC } from "react";
import Link from "next/link";
import { Flex, Box } from "@/components/core/ui";
import { IoPerson } from "react-icons/io5";
import { NextImage } from "@/components/core/gallery";

const ImageContent: FC = () => {
  return (
    <Flex containerClassName="container px-4 mx-auto flex flex-col">
      <Box containerClassName="resize-hero-width mx-auto">
        <NextImage
          width={"w-full"}
          height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
          src={"/featured/past-events-1/2.jpg"}
          alt={"Next Big Event Image"}
          imageClassName={"rounded-lg object-center"}
        />
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-purple-100 text-purple-500">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                Phoebe Caulfield
              </h2>
              <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
              <p className="text-base text-gray-600">
                Raclette knausgaard hella meggs normcore williamsburg enamel pin
                sartorial venmo tbh hot chicken gentrify portland.
              </p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4 text-gray-600">
              Super long content description goes here.
            </p>
            <Link href="#" className="text-purple-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default ImageContent;
