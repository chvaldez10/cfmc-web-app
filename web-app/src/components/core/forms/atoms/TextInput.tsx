import React from "react";

interface TextInputProps {
  type: string;
  id: string;
  name: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ type, id, name, className }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  );
};

export default TextInput;
