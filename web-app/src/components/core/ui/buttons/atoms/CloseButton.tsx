import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CloseButtonProps {
  onClose: (() => void) | undefined;
}

const CloseButton: FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <>
      <button
        className="ml-auto hover:bg-gray-200 button-style"
        onClick={onClose}
      >
        <div className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
          <AiOutlineClose />
        </div>
      </button>
    </>
  );
};

export default CloseButton;
