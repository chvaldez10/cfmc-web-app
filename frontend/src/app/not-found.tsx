"use client";

import PurplePillButton from "@/components/core/buttons/PurplePillButton";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
          <span className="sr-only">Error</span>404
        </h2>

        <p className="text-2xl font-semibold md:text-3xl">
          Sorry, we couldn't find this page.
        </p>

        <p className="my-4 dark:text-gray-600">
          Please navigate back to the homepage.
        </p>

        <PurplePillButton
          text="Homepage"
          onClick={() => router.push("/")}
          variant="outline"
        />
      </div>
    </div>
  );
}
