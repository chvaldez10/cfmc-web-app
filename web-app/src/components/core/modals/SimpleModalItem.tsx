import { FC } from "react";
import { IoMdClose } from "react-icons/io";

interface SimpleModalItemProps {}

const SimpleModalItem: FC<SimpleModalItemProps> = (props) => {
  return (
    <>
      <div className="flex items-start justify-between p-5 border-b border-gray-200 bg-purple-50 md:rounded-t-lg">
        <h3 className="text-3xl font-semibold">Modal Title</h3>
        <button className="p-2 ml-auto text-black text-3xl font-semibold outline-none focus:outline-none">
          <div className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
            <IoMdClose />
          </div>
        </button>
      </div>
      {/* body */}
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
          I always felt like I could do anything. That's the main thing people
          are controlled by! Thoughts- their perception of themselves! They're
          slowed down by their perception of themselves. If you're taught you
          can't do anything, you won't do anything. I was taught I could do
          everything.
        </p>
      </div>
    </>
  );
};

export default SimpleModalItem;
