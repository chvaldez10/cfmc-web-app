import { FC } from "react";
import { NextImage } from "@/components/core/ui";
import { FaStepBackward, FaStepForward, FaPause } from "react-icons/fa";

const MusicCard: FC = () => {
  return (
    <div className="bg-white-0 p-6 rounded-2xl shadow-md w-full h-full flex flex-col justify-between">
      {/* Album Cover */}
      <div className="mb-4">
        <NextImage
          width={"w-full"}
          height={"h-40"}
          src="https://images.unsplash.com/photo-1508829040592-72f179f8a73f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Worship Song"
          imageClassName="rounded-lg object-cover"
        />
      </div>

      {/* Song Info */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Shout to the Lord
        </h2>
        <p className="text-gray-600 text-sm">Don Moen</p>
      </div>

      {/* Music Controls */}
      <div className="flex justify-center items-center mb-4">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition">
          <FaStepBackward className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 focus:outline-none mx-4 transition">
          <FaPause className="w-5 h-5 text-white-0" />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition">
          <FaStepForward className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="bg-gray-200 h-2 rounded-full">
          <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-600">
          <span>1:57</span>
          <span>3:53</span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
