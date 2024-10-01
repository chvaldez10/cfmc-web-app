import React from "react";
import { NextImage } from "@/components/core/ui";
import { FaStepBackward, FaStepForward, FaPause } from "react-icons/fa";

const MusicCard: React.FC = () => {
  return (
    <div className="bg-purple-100 p-8 rounded-lg shadow-md w-80">
      {/* Album Cover */}
      <NextImage
        width={"w-full"}
        height={"h-24"}
        src="https://images.unsplash.com/photo-1508829040592-72f179f8a73f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Worship Song"
        imageClassName="rounded-lg object-center"
      />

      {/* Song Title */}
      <h2 className="text-xl font-semibold text-center">Shout to the Lord</h2>
      {/* Artist Name */}
      <p className="text-gray-600 text-sm text-center">Don Moen</p>
      {/* Music Controls */}
      <div className="mt-6 flex justify-center items-center">
        <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
          <FaStepBackward className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
          <FaPause className="w-6 h-6 text-gray-600" />
        </button>
        <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
          <FaStepForward className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      {/* Progress Bar */}
      <div className="mt-6 bg-gray-200 h-2 rounded-full">
        <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
      </div>
      {/* Time Information */}
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>1:57</span>
        <span>3:53</span>
      </div>
    </div>
  );
};

export default MusicCard;
