import { EventDetailPage } from "@/components/events";
import { getEventBySlug } from "@/lib/supabase/actions/events";
import { notFound } from "next/navigation";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const event = await getEventBySlug(slug);

    if (!event) {
      notFound();
    }

    return <EventDetailPage event={event} />;
  } catch (error) {
    console.error("Error fetching event:", error);
    notFound();
  }
}
