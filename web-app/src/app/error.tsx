"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LongParagraph } from "@/components/core/text";

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
    <div className="div-outside-width min-h-screen">
      <LongParagraph>
        Something went wrong. Please try again later.
      </LongParagraph>
      <button
        onClick={() => reset()}
        className="hover:text-violet-300 text-violet-600"
      >
        Retry
      </button>
    </div>
  );
}
