import { FC } from "react";
import classNames from "classnames";
import { ClientButtonProps } from "@/types/genericTypes";

interface PurplePillButtonClientProps extends ClientButtonProps {}

const baseClass =
  "div-flex-row font-medium gap-2 rounded-full text-sm px-5 py-2.5 ";

const variants = {
  filled: "text-white-0 bg-purple-500",

  outline: "text-purple-500 border border-purple-500",
};

const PurpleColoredBadge: FC<PurplePillButtonClientProps> = ({
  variant = "filled",
  className,
  children,
}) => {
  const buttonClass = classNames(baseClass, variants[variant], className);

  return <span className={buttonClass}>{children}</span>;
};

export default PurpleColoredBadge;
