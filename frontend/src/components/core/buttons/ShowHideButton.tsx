import { FC } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

interface ShowHideButtonProps {
  isToggled: boolean;
  onClick: () => void;
}

const ShowHideButton: FC<ShowHideButtonProps> = ({ isToggled, onClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="absolute inset-y-0 right-0 p-3 flex items-center text-lg hover:text-red-500"
      >
        {isToggled ? <IoMdEye /> : <IoMdEyeOff />}
      </button>
    </>
  );
};

export default ShowHideButton;
