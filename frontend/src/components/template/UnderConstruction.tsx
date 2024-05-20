"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { MdConstruction } from "react-icons/md";

const UnderConstruction: FC<{}> = () => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center justify-center p-16"
      style={{ height: "80vh" }}
    >
      <div className="text-center">
        <MdConstruction className="mx-auto text-8xl text-violet-600" />
        <h2 className="font-extrabold text-4xl dark:text-gray-400">
          Coming Soon !
        </h2>

        <p className="font-semibold my-4">Our Website is under construction.</p>

        <button
          className="hover:text-violet-300 text-violet-600"
          onClick={() => router.push("/")}
        >
          Homepage
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
