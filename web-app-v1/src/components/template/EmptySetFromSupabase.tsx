import { FC } from "react";
import { FlexCenter, LongParagraph } from "@/components/core/ui";

interface EmptySetFromSupabaseProps {
  longParagraph: string;
}

const EmptySetFromSupabase: FC<EmptySetFromSupabaseProps> = ({
  longParagraph,
}) => {
  return (
    <FlexCenter containerClassName={"py-8 md:py-14"}>
      <LongParagraph containerClassName={"long-paragraph-text-color"}>
        {longParagraph}
      </LongParagraph>
    </FlexCenter>
  );
};

export default EmptySetFromSupabase;
