import { FC } from "react";
import { MdConstruction } from "react-icons/md";
import {
  SectionSubheader,
  LongParagraph,
  NavigateButton,
  FlexCenter,
} from "@/components/core/ui";

const UnderConstruction: FC<{}> = () => {
  return (
    <FlexCenter containerClassName="min-h-screen">
      <FlexCenter containerClassName="text-center gap-4">
        <MdConstruction className="mx-auto text-8xl text-violet-600" />
        <SectionSubheader text={"Coming Soon!"} />

        <NavigateButton url="/" variant="outline">
          Homepage
        </NavigateButton>
      </FlexCenter>
    </FlexCenter>
  );
};

export default UnderConstruction;
