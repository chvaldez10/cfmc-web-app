import React from "react";
import { FormInputProps } from "@/types/uiProps";

interface TextInputProps extends FormInputProps {
  containerClassName?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  id,
  name,
  placeholder,
  required = false,
  containerClassName,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`w-full bg-white rounded border border-gray-300 focus:border-purple-500 text-sm outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${containerClassName}`}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default TextInput;
