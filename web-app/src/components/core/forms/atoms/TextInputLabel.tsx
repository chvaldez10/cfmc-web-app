import { FC, useState } from "react";
import { FormProps } from "@/types/genericTypes";

interface TextInputLabelProps extends FormProps {}

const TextInputLabel: FC<TextInputLabelProps> = ({
  type,
  name,
  id,
  placeholder,
  required = false,
  maxLength,
}) => {
  const [value, setValue] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "tel") {
      const key = event.key;
      if (!/^\d$/.test(key) && key !== "Backspace") {
        event.preventDefault();
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="relative z-0">
      <input
        type={type}
        name={name}
        id={id}
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer"
        placeholder=" "
        required={required}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        maxLength={maxLength}
        value={value}
      />
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {placeholder}
      </label>
      {type === "email" && !isEmailValid(value) && value !== "" && (
        <p className="text-xs mt-1">Invalid email address</p>
      )}
    </div>
  );
};

export default TextInputLabel;
