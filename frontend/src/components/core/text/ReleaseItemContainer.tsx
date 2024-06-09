import React from "react";
import ReleaseItem from "@/components/core/text/ReleaseItem";

interface ReleaseItemContainerProps {
  year: number;
}

const ReleaseItemContainer: React.FC<ReleaseItemContainerProps> = ({
  year,
}) => {
  return <ReleaseItem />;
};

export default ReleaseItemContainer;
