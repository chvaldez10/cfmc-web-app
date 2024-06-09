// components/SidebarLayout.tsx
import Link from "next/link";
import React from "react";

const SidebarLayout: React.FC = () => {
  return (
    <div className="w-full mx-auto p-5 md:p-0 items-center justify-center md:w-9/12 flex gap-4">
      <div className=" z-10 top-5 left-5 bg-white-0 w-32 p-2 h-full shadow-md">
        <nav className="flex flex-col space-y-2">
          <Link href="resources/release-notes" className="text-lg">
            About
          </Link>
        </nav>
      </div>
      <div className="mt-16 md:ml-36 p-4 w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">June 06, 2024</h2>
        <p className="text-lg mb-4">V1.46</p>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <span className="font-bold">Feature Title 1</span> description
          </li>
          <li>
            <span className="font-bold">Feature Title 2</span> description
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarLayout;
