import { EventDetailPage } from "@/components/events";
import { getEventBySlug } from "@/lib/supabase/actions/events";
import { notFound } from "next/navigation";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = await getEventBySlug(slug).catch((error) => {
    console.error("Error fetching event:", error);
    notFound();
  });

  if (!event) {
    notFound();
  }

  return <EventDetailPage event={event} />;
}
