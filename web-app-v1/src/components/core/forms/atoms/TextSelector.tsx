"use client";

import { FC, useState, ChangeEvent } from "react";
import InputLabel from "@/components/core/forms/atoms/InputLabel";
import Box from "@/components/core/ui/layout/Box";
import "@/styles/text-select.css";

interface TextSelectorProps {
  defaultSelectedItem: string;
  name: string;
  containerClassName?: string;
}

const TextSelector: FC<TextSelectorProps> = ({
  defaultSelectedItem,
  name,
  containerClassName,
}) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  };

  return (
    <Box
      containerClassName={`relative z-0 w-full mb-5 group ${containerClassName}`}
    >
      <InputLabel label="Select an option" htmlFor="form-selector" />
      <select
        id="form-selector"
        className="custom-select border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 focus:outline-purple-500 block w-full p-2.5"
        value={selectedItem}
        onChange={handleChange}
        name={name}
      >
        <option value="Connect">Connect</option>
        <option value="Prayer">Prayer</option>
        <option value="Media">Media</option>
        <option value="Other">Other</option>
      </select>
    </Box>
  );
};

export default TextSelector;
