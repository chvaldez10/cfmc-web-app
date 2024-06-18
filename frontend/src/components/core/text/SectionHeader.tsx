import React from "react";

interface SectionHeaderProps {
  title: string;
}

// Create the functional component
const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="text-center my-8 ">
      <h2 className="text-4xl font-extrabold underline">{title}</h2>
    </div>
  );
};

export default SectionHeader;
