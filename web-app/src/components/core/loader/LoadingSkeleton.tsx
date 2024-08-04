import { FC } from "react";
import { FaImage } from "react-icons/fa";

interface LoadingSkeletonProps {
  containerClassName?: string;
}

const LoadingSkeleton: FC<LoadingSkeletonProps> = ({ containerClassName }) => {
  return (
    <div
      className={`space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center ${containerClassName}`}
    >
      <div className="flex-center w-full h-48 bg-gray-300 rounded sm:w-96">
        <FaImage className="w-10 h-10 text-gray-200" />
      </div>
      <div className="w-full space-y-2">
        <div className="h-2.5 bg-gray-200 rounded-full w-48"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[480px]"></div>
        <div className="h-2 bg-gray-200 rounded-full"></div>
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSkeleton;
