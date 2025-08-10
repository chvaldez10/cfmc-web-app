import { Article } from "@/components/ui/text";
import whatWeBelieve from "@/constants/whatWeBelieve";
import { WHAT_WE_BELIEVE_HEADER } from "@/constants/whatWeBelieve";

export default function BeliefsPage() {
  return (
    <Article
      title={WHAT_WE_BELIEVE_HEADER.title}
      description={WHAT_WE_BELIEVE_HEADER.description}
      items={whatWeBelieve}
    />
  );
}
