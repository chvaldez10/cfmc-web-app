import React from "react";
import ReleaseItem from "@/components/core/text/ReleaseItem";
import { releaseData } from "@/data/testData/releaseNotes";

interface ReleaseItemContainerProps {
  year: number;
}

function filterReleaseByYear(year: number) {
  return releaseData.filter((release) => release.year === year);
}

const ReleaseItemContainer: React.FC<ReleaseItemContainerProps> = ({
  year,
}) => {
  const releaseDetails = filterReleaseByYear(year);

  console.log(releaseData);

  return <ReleaseItem />;
};

export default ReleaseItemContainer;
