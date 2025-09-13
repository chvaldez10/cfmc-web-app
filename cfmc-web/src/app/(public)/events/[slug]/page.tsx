"use client";

import { EventDetailPage } from "@/components/events";
import { mockEvent } from "./page.data";
import { use } from "react";

export default function EventPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await the async params in Next.js 15
  const _resolvedParams = use(params);
  const _resolvedSearchParams = use(searchParams);
  const event = mockEvent;

  return <EventDetailPage event={event} />;
}
