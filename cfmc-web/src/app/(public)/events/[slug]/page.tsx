import { EventDetailPage } from "@/components/events";
import { getEventBySlug } from "@/lib/supabase/actions/events";
import { notFound } from "next/navigation";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = await getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  return <EventDetailPage event={event} />;
}
