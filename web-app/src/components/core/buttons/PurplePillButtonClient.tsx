"use client";

import { FC, ReactNode } from "react";
import classNames from "classnames";

interface PurplePillButtonClientProps {
  variant?: "filled" | "outline";
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const variants = {
  filled: "purple-button-filled",

  outline: "purple-button-outline",
};

const PurplePillButtonClient: FC<PurplePillButtonClientProps> = ({
  variant = "filled",
  className,
  children,
  onClick,
}) => {
  const buttonClass = classNames(
    "purple-button-base",
    variants[variant],
    className
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default PurplePillButtonClient;
