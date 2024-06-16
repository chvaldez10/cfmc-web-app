import { FC } from "react";
import { ReleaseDetails } from "@/types/releaseData";

interface ReleaseItemProps {
  releaseDetail: ReleaseDetails;
}

const ReleaseItem: FC<ReleaseItemProps> = ({ releaseDetail }) => {
  return (
    <div className="bg-white-0 p-6 rounded-lg shadow-lg mx-auto my-6 lg:my-8 ">
      <h2 className="text-2xl font-bold mb-2">{releaseDetail.details.date}</h2>
      <p className="text-bold mb-4">{releaseDetail.version}</p>
      <ul className="list-disc pl-5 space-y-4">
        {Object.entries(releaseDetail.details.featureList).map(
          ([featureHeader, featureDescription]) => (
            <li key={featureHeader}>
              <span className="font-bold">{featureHeader}</span>{" "}
              <span>{featureDescription}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ReleaseItem;
