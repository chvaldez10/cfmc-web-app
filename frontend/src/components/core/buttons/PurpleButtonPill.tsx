import { FC } from "react";

interface ButtonGradientOutlineProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const buttonClass =
  "text-white bg-purple-500 hover:bg-purple-600 font-medium rounded-full text-sm px-5 py-2.5 text-center";

const PurpleButtonPill: FC<ButtonGradientOutlineProps> = ({
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

export default PurpleButtonPill;
