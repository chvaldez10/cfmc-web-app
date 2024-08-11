import { FlexCenter, Box } from "@/components/core/ui";
import {
  LongParagraph,
  SectionHeader,
  NavigateButton,
} from "@/components/core/ui";
import { LuSearchX } from "react-icons/lu";

export default function NotFoundPage() {
  return (
    <FlexCenter containerClassName="h-screen">
      <Box containerClassName="flex-center">
        <LuSearchX className="text-6xl" />
        <SectionHeader text="Error 404" className="m-4" />
      </Box>
      <FlexCenter containerClassName="space-y-2">
        <LongParagraph containerClassName="">
          {`Sorry, we couldn't find this page.`}
        </LongParagraph>

        <NavigateButton url={"/"} variant="outline">
          Homepage
        </NavigateButton>
      </FlexCenter>
    </FlexCenter>
  );
}
