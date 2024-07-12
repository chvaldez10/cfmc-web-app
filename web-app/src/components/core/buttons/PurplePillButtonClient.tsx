"use client";

import { FC } from "react";
import classNames from "classnames";
import { clientButton } from "@/types/genericTypes";

interface PurplePillButtonClientProps extends clientButton {
  onClick: () => void;
}

const baseClass =
  "div-flex-row font-medium gap-2 rounded-full text-sm px-5 py-2.5 hover-animation";

const variants = {
  filled: "text-white-0 bg-purple-500 hover:bg-purple-700 hover:text-white-0",

  outline:
    "text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white-0",
};

const PurplePillButtonClient: FC<PurplePillButtonClientProps> = ({
  variant = "filled",
  className,
  children,
  onClick,
}) => {
  const buttonClass = classNames(baseClass, variants[variant], className);

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default PurplePillButtonClient;
