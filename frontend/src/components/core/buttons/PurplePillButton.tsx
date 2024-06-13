import { FC, ReactNode } from "react";
import classNames from "classnames";

interface PurplePillButtonProps {
  onClick: () => void;
  variant?: "filled" | "outline";
  className?: string;
  children?: ReactNode;
}

const baseClass =
  "flex flex-row font-medium items-center text-center gap-2 rounded-full text-sm px-5 py-2.5 hover-animation";

const variants = {
  filled: "text-white-0 bg-purple-500 hover:bg-purple-700 hover:text-white-0",

  outline:
    "text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white-0",
};

const PurplePillButton: FC<PurplePillButtonProps> = ({
  onClick,
  variant = "filled",
  className,
  children,
}) => {
  const buttonClass = classNames(baseClass, variants[variant], className);

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default PurplePillButton;
