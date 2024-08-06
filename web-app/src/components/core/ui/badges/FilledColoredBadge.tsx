import { FC } from "react";

interface FilledColoredBadgeProps {
  color: string;
  tagName: string;
  containerClassName?: string;
}

const FilledColoredBadge: FC<FilledColoredBadgeProps> = ({
  containerClassName,
  color,
  tagName,
}) => {
  const baseClass = "text-xs font-medium me-2 px-2.5 py-0.5 rounded border";
  const badgeClass = `bg-${color}-100 text-${color}-800 border-${color}-400`;

  return (
    <span className={`${baseClass} ${badgeClass} ${containerClassName}`}>
      {tagName}
    </span>
  );
};

export default FilledColoredBadge;
