"use client";

import { FC, useState } from "react";
import { ShowHideButton } from "@/components/core/buttons/";
import { formProps } from "@/types/genericTypes";

interface LoginInputProps extends formProps {}

const LoginInput: FC<LoginInputProps> = ({
  type,
  name,
  id,
  placeholder,
  required = false,
  maxLength,
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
        className="border border-gray-300 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 focus:outline-purple-500 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
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

export default LoginInput;
