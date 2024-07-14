import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { clientButton } from "@/types/genericTypes";
import { SectionSubheader, LongParagraph } from "@/components/core/text/";

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
        <button
          className="p-2 ml-auto text-3xl font-semibold outline-none focus:outline-none"
          onClick={onClose}
        >
          <div className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
            <IoMdClose />
          </div>
        </button>
      </div>
      {/* body */}
      <div className="relative p-6 flex-auto">
        <LongParagraph>{description}</LongParagraph>
      </div>
    </>
  );
};

export default SimpleModalItem;
