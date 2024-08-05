"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LongParagraph } from "@/components/core/ui";
import { PurplePillButtonClient } from "@/components/core/buttons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="div-outside-width min-h-screen space-y-4">
      <LongParagraph>
        Something went wrong. Please try again later.
      </LongParagraph>
      <PurplePillButtonClient onClick={() => reset()}>
        Please Try Again
      </PurplePillButtonClient>
    </div>
  );
}
