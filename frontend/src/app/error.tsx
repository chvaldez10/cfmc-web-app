"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
    <div className="flex flex-col items-center justify-center text-center">
      <h1>Something went wrong. Please try again later</h1>
      <button
        className="hover:text-violet-300 text-violet-600"
        onClick={() => router.push("/")}
      >
        Homepage
      </button>
    </div>
  );
}
