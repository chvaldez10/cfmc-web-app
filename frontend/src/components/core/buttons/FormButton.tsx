import { FC, ReactNode } from "react";

interface FormButtonProps {
  formAction?: (formData: FormData) => Promise<void>;
  children: ReactNode;
  className?: string;
}

const baseClass = "text-sm font-medium";

const FormButton: FC<FormButtonProps> = ({
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

export default FormButton;
