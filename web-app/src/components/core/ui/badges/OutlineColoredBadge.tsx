import { FC, ReactNode } from "react";

interface OutlineColoredBadgeProps {
  containerClassName: string;
  color: string;
  children: ReactNode;
}

const OutlineColoredBadge: FC<OutlineColoredBadgeProps> = ({
  containerClassName,
  color,
  children,
}) => {
  const baseClass = "text-xs font-medium me-2 px-2.5 py-0.5 rounded border";
  const badgeClass = `text-${color}-500 border-${color}-500`;

  return (
    <span className={`${baseClass} ${badgeClass} ${containerClassName}`}>
      {children}
    </span>
  );
};

export default OutlineColoredBadge;
