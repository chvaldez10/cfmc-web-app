import React from "react";

interface TextLabelProps {
  label: string;
  htmlFor: string;
  containerClassName?: string;
}

const TextLabel: React.FC<TextLabelProps> = ({
  label,
  htmlFor,
  containerClassName,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`leading-7 text-sm text-gray-600 ${containerClassName}`}
    >
      {label}
    </label>
  );
};

export default TextLabel;
