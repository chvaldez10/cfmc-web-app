import { FC } from "react";
import { FlexCenter, LongParagraph, Box } from "@/components/core/ui";

const CopyrightNotice: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FlexCenter containerClassName="">
      <Box containerClassName="w-full text-center">
        <LongParagraph>
          Calgary Filipino Methodist Church ©{" "}
          <span id="current-year">{currentYear}</span>
        </LongParagraph>
      </Box>
    </FlexCenter>
  );
};

export default CopyrightNotice;
