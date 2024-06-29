import React from "react";
import ReleaseItem from "@/components/core/text/ReleaseItem";
import { releaseData } from "@/data/testData/releaseNotes";

interface ReleaseItemContainerProps {
  year: number;
}

function filterReleaseByYear(year: number) {
  const releaseYear = releaseData.find((release) => release.year === year);
  return releaseYear ? releaseYear.releaseItems : [];
}

const ReleaseItemContainer: React.FC<ReleaseItemContainerProps> = ({
  year,
}) => {
  const releaseDetails = filterReleaseByYear(year);

  return (
    <>
      {releaseDetails.map((releaseDetail, index) => (
        <ReleaseItem key={index} releaseDetail={releaseDetail} />
      ))}
    </>
  );
};

export default ReleaseItemContainer;
