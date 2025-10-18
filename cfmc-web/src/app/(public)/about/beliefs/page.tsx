import { Metadata } from "next";
import { Article } from "@/components/ui/text";
import whatWeBelieve from "@/constants/whatWeBelieve";
import { generatePageMetadata } from "@/utils/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "What We Believe",
  description:
    "Learn about the core beliefs and doctrines of Calgary Filipino Methodist Church. Our faith is rooted in Methodist traditions and biblical teachings.",
  path: "/about/beliefs",
  keywords: [
    "church beliefs",
    "Methodist doctrine",
    "Christian faith",
    "biblical teachings",
    "church theology",
  ],
});

export default function BeliefsPage() {
  return <Article items={whatWeBelieve} />;
}
