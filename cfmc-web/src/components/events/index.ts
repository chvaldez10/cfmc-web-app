// Event Components
export { default as EventImageGallery } from "./EventImageGallery";
export { default as EventDescription } from "./EventDescription";
export { default as EventDetails } from "./EventDetails";
export { default as EventMap } from "./EventMap";
export { default as EventDetailPage } from "./EventDetailPage";

// @deprecated Use EventImageGallery instead
export { default as EventImageCarousel } from "./EventImageCarousel";

// Re-export types
export type { Events } from "@/types/supabase/worship";
