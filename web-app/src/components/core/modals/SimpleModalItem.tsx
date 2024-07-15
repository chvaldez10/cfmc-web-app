import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { clientButton } from "@/types/genericTypes";
import { SectionSubheader, LongParagraph } from "@/components/core/text/";
import { CloseButton } from "@/components/core/buttons";

interface SimpleModalItemProps extends clientButton {
  title: string;
  description: string;
  onClose: () => void;
}

const SimpleModalItem: FC<SimpleModalItemProps> = ({
  title,
  description,
  onClose,
}) => {
  return (
    <>
      <div className="flex items-start justify-between px-5 py-3 border-b border-gray-2000 bg-purple-50 md:rounded-t-lg">
        <SectionSubheader text={title} />
        <CloseButton onClose={onClose} />
      </div>
      {/* body */}
      <div className="relative p-6 flex-auto">
        <LongParagraph>{description}</LongParagraph>
      </div>
    </>
  );
};

export default SimpleModalItem;
