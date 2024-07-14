import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { clientButton } from "@/types/genericTypes";

interface SimpleModalItemProps extends clientButton {
  title: string;
  description: string;
}

const SimpleModalItem: FC<SimpleModalItemProps> = ({ title, description }) => {
  return (
    <>
      <div className="flex items-start justify-between p-5 border-b border-gray-200 bg-purple-50 md:rounded-t-lg">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <button className="p-2 ml-auto text-black text-3xl font-semibold outline-none focus:outline-none">
          <div className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
            <IoMdClose />
          </div>
        </button>
      </div>
      {/* body */}
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );
};

export default SimpleModalItem;
