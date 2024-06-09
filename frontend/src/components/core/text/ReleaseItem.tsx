import React from "react";

type descriptionList = {
  title: string;
  description: string;
};

interface ReleaseItemProps {
  date: string;
  version: string;
}

const ReleaseItem: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">June 09, 2024</h2>
      <p className="text-lg mb-4">v 24.06.09</p>
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <span className="font-bold">Feature Title 1</span> description
        </li>
        <li>
          <span className="font-bold">Feature Title 2</span> description
        </li>
      </ul>
    </>
  );
};

export default ReleaseItem;
