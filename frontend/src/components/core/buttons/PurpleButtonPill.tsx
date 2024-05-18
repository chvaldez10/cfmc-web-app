import { FC } from "react";
import classNames from "classnames";

interface ButtonGradientOutlineProps {
  text: string;
  onClick: () => void;
  variant?: "filled" | "outline";
  className?: string;
}

const baseClass =
  "font-medium rounded-full text-sm px-5 py-2.5 text-center transition-colors duration-300";

const variants = {
  filled: "text-white-0 bg-purple-500 hover:bg-white-0 hover:text-purple-500",
  outline:
    "text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white-0",
};

const PurpleButtonPill: FC<ButtonGradientOutlineProps> = ({
  text,
  onClick,
  variant = "filled",
  className,
}) => {
  const buttonClass = classNames(baseClass, variants[variant], className);
  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default PurpleButtonPill;
