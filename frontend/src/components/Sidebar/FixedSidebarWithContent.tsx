// components/SidebarLayout.tsx
import Link from "next/link";
import React from "react";
import ReleaseItemContainer from "../core/text/ReleaseItemContainer";

const FixedSidebarWithContent: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full mx-auto p-5 md:p-0 items-center justify-center md:w-9/12 flex gap-4">
      <div className=" z-10 top-5 left-5 bg-white-0 w-32 p-2  rounded-lg h-full shadow-md">
        <nav className="flex flex-col space-y-2 ">
          <Link href="/resources/release-notes" className="text-lg">
            2024
          </Link>
        </nav>
      </div>
      <div className="mt-16 md:ml-36 p-4 w-full max-w-3xl mx-auto">
        <ReleaseItemContainer year={currentYear} />
      </div>
    </div>
  );
};

export default FixedSidebarWithContent;
