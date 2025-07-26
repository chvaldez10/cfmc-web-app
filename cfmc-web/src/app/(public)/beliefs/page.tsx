import { Article } from "@/components/ui/text";
import whatWeBelieve from "@/constants/whatWeBelieve";

export default function BeliefsPage() {
  return (
    <Article
      title="What We Believe"
      description="Discover our core theological beliefs and foundational principles that guide our faith community."
      items={whatWeBelieve}
    />
  );
}
