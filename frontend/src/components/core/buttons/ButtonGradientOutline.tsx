import { FC } from "react";

interface ButtonGradientOutlineProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const buttonClass =
  "text-white bg-gradient-to-r from-purple-500 via-purple-500 to-purple-400 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-transparent hover:brightness-110 hover:shadow-lg hover:shadow-purple-700/60 hover:border-white";

const ButtonGradientOutline: FC<ButtonGradientOutlineProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <span className="text-white-10">{text}</span>
    </button>
  );
};

export default ButtonGradientOutline;
