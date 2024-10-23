import { FC } from "react";
import { MdConstruction } from "react-icons/md";
import {
  SectionSubheader,
  NavigateButton,
  FlexCenter,
} from "@/components/core/ui";

const UnderConstruction: FC = () => {
  return (
    <FlexCenter containerClassName="min-h-screen">
      <FlexCenter containerClassName="text-center gap-4">
        {/* Construction Icon */}
        <MdConstruction className="mx-auto text-8xl text-violet-600" />

        {/* Coming Soon! */}
        <SectionSubheader text={"Coming Soon!"} />

        {/* Homepage Button */}
        <NavigateButton url="/" variant="outline">
          Homepage
        </NavigateButton>
      </FlexCenter>
    </FlexCenter>
  );
};

export default UnderConstruction;
