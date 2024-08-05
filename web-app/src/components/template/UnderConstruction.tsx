import { FC } from "react";
import { MdConstruction } from "react-icons/md";
import {
  SectionSubheader,
  LongParagraph,
  NavigateButton,
} from "@/components/core/ui";

const UnderConstruction: FC<{}> = () => {
  return (
    <div className="div-outside-width min-h-screen">
      <div className="div-outside-width text-center gap-4">
        <MdConstruction className="mx-auto text-8xl text-violet-600" />
        <SectionSubheader text={"Coming Soon!"} />

        <NavigateButton url="/" variant="outline">
          Homepage
        </NavigateButton>
      </div>
    </div>
  );
};

export default UnderConstruction;
