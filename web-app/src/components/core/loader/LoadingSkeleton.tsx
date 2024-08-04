import { FC } from "react";
import { FaImage } from "react-icons/fa";

interface LoadingSkeletonProps {
  containerClassName?: string;
}

const LoadingSkeleton: FC<LoadingSkeletonProps> = ({ containerClassName }) => {
  return (
    <div
      className={`animate-pulse gap-2 div-outside-width md:flex-row ${containerClassName}`}
    >
      <div className="flex-center w-full h-48 bg-gray-300 rounded sm:w-96">
        <FaImage className="w-10 h-10 text-gray-200" />
      </div>
      <div className="w-full space-y-2">
        <div className="h-3 bg-gray-200 rounded-full"></div>
        <div className="h-2 bg-gray-200 rounded-full "></div>
        <div className="h-2 bg-gray-200 rounded-full"></div>
        <div className="h-2 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
