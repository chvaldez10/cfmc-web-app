import NavigateButton from "@/components/core/buttons/NavigateButton";
import { FlexCenter, Box } from "@/components/core/ui";
import { LongParagraph, SectionHeader } from "@/components/core/text";
import { LuSearchX } from "react-icons/lu";

export default function NotFoundPage() {
  return (
    <FlexCenter containerClassName="h-screen">
      <Box containerClassName="flex-center">
        <LuSearchX className="text-6xl" />
        <SectionHeader text="Error 404" className="m-4" />
      </Box>

      <LongParagraph containerClassName="">
        {`Sorry, we couldn't find this page.`}
      </LongParagraph>

      <LongParagraph containerClassName="">
        {`Please navigate back to the homepage.`}
      </LongParagraph>

      <NavigateButton url={"/"} variant="outline">
        Homepage
      </NavigateButton>
    </FlexCenter>
  );
}
