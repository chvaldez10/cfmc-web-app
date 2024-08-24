import { FC } from "react";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";

const FullTeamCard: FC = () => {
  return (
    <div className="relative pt-20 pb-12 bg-white-0 rounded-lg shadow-lg max-w-2xl mx-auto">
      <Image
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="cover-image"
        className="absolute top-0 left-0 z-0 h-32 w-full object-cover rounded-t-lg"
        width={640}
        height={128}
      />
      <div className="relative z-10 px-6">
        <div className="flex items-center justify-center mb-5">
          <div className="bg-white-0 rounded-full p-2">
            <IoPerson className="w-24 h-24 text-gray-600" />
          </div>
        </div>
        <div className="flex flex-col items-center mb-5">
          <h3 className="font-bold text-2xl text-gray-800 mb-1 text-center">
            John Doe
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Insert role here
            <br />
            Calgary Filipino Methodist Church
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <button className="rounded-full py-2 px-4 bg-gray-100 text-gray-700 text-xs font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white-0">
            Media
          </button>
          <button className="rounded-full py-2 px-4 bg-gray-100 text-gray-700 text-xs font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white-0">
            Music
          </button>
          <button className="rounded-full py-2 px-4 bg-gray-100 text-gray-700 text-xs font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white-0">
            Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullTeamCard;
