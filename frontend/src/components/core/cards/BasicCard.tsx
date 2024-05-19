import React from "react";

interface BasicCardProps {
  items: string[];
  label: string;
}

const BasicCard: React.FC<BasicCardProps> = ({ items, label }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 py-8 bg-blue-800 text-white">
      Card
    </div>
  );
};

export default BasicCard;
