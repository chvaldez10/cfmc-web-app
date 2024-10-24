import { FC } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  SectionSubheader,
  NavigateButton,
  FlexCenter,
} from "@/components/core/ui";

const InquiryConfirmationScreen: FC = () => {
  return (
    <FlexCenter containerClassName="min-h-auto">
      <FlexCenter containerClassName="text-center gap-4">
        {/* Check Icon */}
        <FaRegCheckCircle className="mx-auto text-8xl text-violet-600" />

        {/* Thank you for your inquiry! */}
        <SectionSubheader
          text={"Thank you for your inquiry!"}
          containerClassName="long-paragraph-text-color"
        />
      </FlexCenter>
    </FlexCenter>
  );
};

export default InquiryConfirmationScreen;
