import PurplePillButtonClient from "@/components/core/buttons/PurplePillButtonClient";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
        <span className="sr-only">Error</span>404
      </h2>

      <p className="text-2xl font-semibold md:text-3xl">
        Sorry, we couldn't find this page.
      </p>

      <p className="my-4 dark:text-gray-600">
        Please navigate back to the homepage.
      </p>

      <PurplePillButtonClient url={"/"} variant="outline">
        Homepage
      </PurplePillButtonClient>
    </div>
  );
}
