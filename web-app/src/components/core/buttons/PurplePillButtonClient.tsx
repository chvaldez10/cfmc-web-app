"use client";

import { FC, ReactNode } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";

interface PurplePillButtonClientProps {
  onClick?: () => void | undefined;
  variant?: "filled" | "outline";
  className?: string;
  children?: ReactNode;
  url?: string;
}

const baseClass =
  "div-flex-row font-medium gap-2 rounded-full text-sm px-5 py-2.5 hover-animation";

const variants = {
  filled: "text-white-0 bg-purple-500 hover:bg-purple-700 hover:text-white-0",

  outline:
    "text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white-0",
};

const PurplePillButtonClient: FC<PurplePillButtonClientProps> = ({
  onClick,
  variant = "filled",
  className,
  children,
  url,
}) => {
  const router = useRouter();
  const buttonClass = classNames(baseClass, variants[variant], className);

  return (
    <button
      className={buttonClass}
      onClick={url ? () => router.push(url) : onClick}
    >
      {children}
    </button>
  );
};

export default PurplePillButtonClient;
