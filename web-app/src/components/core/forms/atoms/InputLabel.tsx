import React from "react";

interface InputLabelProps {
  label: string;
  htmlFor: string;
  containerClassName?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({
  label,
  htmlFor,
  containerClassName,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`leading-7 text-sm text-gray-500 ${containerClassName}`}
    >
      {label}
    </label>
  );
};

export default InputLabel;
