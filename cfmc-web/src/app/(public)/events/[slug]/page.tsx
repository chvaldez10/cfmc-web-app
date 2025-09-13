import { EventDetailPage } from "@/components/events";
import { getEventBySlug } from "@/lib/supabase/actions/events";
import { notFound } from "next/navigation";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const event = await getEventBySlug(resolvedParams.slug);

  if (!event) {
    notFound();
  }

  return <EventDetailPage event={event} />;
}
