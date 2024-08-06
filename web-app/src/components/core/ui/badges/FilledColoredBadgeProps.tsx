import { FC, ReactNode } from "react";

interface FilledColoredBadgeProps {
  containerClassName: string;
  color: string;
  children: ReactNode;
}

const FilledColoredBadge: FC<FilledColoredBadgeProps> = ({
  containerClassName,
  color,
  children,
}) => {
  const baseClass = "text-xs font-medium me-2 px-2.5 py-0.5 rounded border";
  const badgeClass = `bg-${color}-100 text-${color}-800 border-${color}-400`;

  return (
    <span className={`${baseClass} ${badgeClass} ${containerClassName}`}>
      {children}
    </span>
  );
};

export default FilledColoredBadge;
