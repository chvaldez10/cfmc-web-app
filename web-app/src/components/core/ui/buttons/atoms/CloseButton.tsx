import { FC } from "react";
import { IoMdClose } from "react-icons/io";

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <>
      <button
        className="p-2 ml-auto text-3xl font-semibold outline-none focus:outline-none rounded-lg hover:bg-gray-200 "
        onClick={onClose}
      >
        <div className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
          <IoMdClose />
        </div>
      </button>
    </>
  );
};

export default CloseButton;
