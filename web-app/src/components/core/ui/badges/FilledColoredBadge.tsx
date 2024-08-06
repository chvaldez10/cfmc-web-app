import { FC } from "react";
import classNames from "classnames";
import { BadgeProps } from "@/types/genericTypes";

interface FilledColoredBadgeProps extends BadgeProps {
  containerClassName?: string;
}

const FilledColoredBadge: FC<FilledColoredBadgeProps> = ({
  containerClassName,
  color,
  tagName,
}) => {
  const baseClass = "text-xs font-medium me-2 px-2.5 py-0.5 rounded border";
  const badgeClass = color;
  const badgeClassName = classNames(baseClass, badgeClass, containerClassName);

  return <span className={badgeClassName}>{tagName}</span>;
};

export default FilledColoredBadge;
