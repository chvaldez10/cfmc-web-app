import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CloseButtonProps {
  onClose: (() => void) | undefined;
}

const CloseButton: FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button
      className="ml-auto hover:bg-gray-200 button-style"
      onClick={onClose}
    >
      <AiOutlineClose size={24} strokeWidth={16} />
    </button>
  );
};

export default CloseButton;
