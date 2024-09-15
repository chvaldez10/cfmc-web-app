import { FC } from "react";
import {
  FlexCenter,
  LongParagraph,
  NavigateButton,
} from "@/components/core/ui";

const EventNotFound: FC = () => {
  return (
    <FlexCenter containerClassName={"min-h-screen space-y-4"}>
      <LongParagraph>
        {`We're sorry, but the event you're looking for doesn't exist.
        `}
      </LongParagraph>
      <NavigateButton url={"/"} variant="outline">
        Homepage
      </NavigateButton>
    </FlexCenter>
  );
};

export default EventNotFound;
