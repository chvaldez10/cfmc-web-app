import { FC } from "react";

interface TextAreaProps {
  id: string;
  rows?: number;
  placeholder?: string;
  label: string;
  name: string;
}

const TextArea: FC<TextAreaProps> = ({
  id,
  rows = 4,
  placeholder = "Write your message here ...",
  label,
  name,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        name={name}
        className="block p-2.5 w-full text-sm text-gray-500 bg-white-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 focus:outline-purple-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
