"use client";

import { FC, useEffect, useState } from "react";
import ReleaseItem from "@/components/core/resources/release/ReleaseItem";
import { getReleaseNotesByYear } from "@/utils/supabase/actions/releaseNotesActions";
import { ReleaseNotes } from "@/types/supabase/core";
interface ReleaseItemContainerProps {
  year: number;
}

const ReleaseItemContainer: FC<ReleaseItemContainerProps> = ({ year }) => {
  const [releaseDetails, setReleaseDetails] = useState<ReleaseNotes[]>([]);

  useEffect(() => {
    const fetchReleaseDetails = async () => {
      const data = await getReleaseNotesByYear(year);
      setReleaseDetails(data || []);
    };
    fetchReleaseDetails();
  }, [year]);

  console.log(releaseDetails);
  return (
    <>
      {releaseDetails.map((releaseDetail, index) => (
        <ReleaseItem key={index} {...releaseDetail} />
      ))}
    </>
  );
};

export default ReleaseItemContainer;
