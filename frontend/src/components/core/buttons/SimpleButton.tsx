import { FC, ReactNode } from "react";

interface SimpleButtonProps {
  formAction?: (formData: FormData) => Promise<void>;
  children: ReactNode;
  className?: string;
}

const baseClass = "text-sm font-medium";

const SimpleButton: FC<SimpleButtonProps> = ({
  formAction = "",
  children,
  className = "",
}) => {
  return (
    <button formAction={formAction} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
};

export default SimpleButton;
