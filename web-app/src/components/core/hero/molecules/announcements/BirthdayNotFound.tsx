import { FC } from "react";
import { FlexCenter, LongParagraph } from "@/components/core/ui";

const BirthdayNotFound: FC = () => {
  return (
    <FlexCenter containerClassName={"py-8 md:py-14"}>
      <LongParagraph>
        {`No birthdays for this month.
        `}
      </LongParagraph>
    </FlexCenter>
  );
};

export default BirthdayNotFound;
