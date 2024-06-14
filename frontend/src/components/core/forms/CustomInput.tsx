"use client";

import { FC, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import ShowHideButton from "../buttons/ShowHideButton";

interface CustomInputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({
  type,
  name,
  id,
  placeholder,
  required = false,
}) => {
  const [inputType, setInputType] = useState<string>(type);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsToggled(!isToggled);
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="relative">
      <input
        type={inputType}
        name={name}
        id={id}
        className="border border-gray-300 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-purple-500 focus:shadow-outline block w-full p-2.5"
        placeholder={placeholder}
        required={required}
      />
      {type === "password" && (
        <ShowHideButton
          onClick={togglePasswordVisibility}
          isToggled={isToggled}
        />
      )}
    </div>
  );
};

export default CustomInput;
