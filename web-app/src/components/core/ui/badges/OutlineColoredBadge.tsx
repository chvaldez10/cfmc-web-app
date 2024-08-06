import { FC } from "react";

interface OutlineColoredBadgeProps {
  containerClassName: string;
  color: string;
  tagName: string;
}

const OutlineColoredBadge: FC<OutlineColoredBadgeProps> = ({
  containerClassName,
  color,
  tagName,
}) => {
  const baseClass = "text-xs font-medium me-2 px-2.5 py-0.5 rounded border";
  const badgeClass = `text-${color}-500 border-${color}-500`;

  return (
    <span className={`${baseClass} ${badgeClass} ${containerClassName}`}>
      {tagName}
    </span>
  );
};

export default OutlineColoredBadge;
