import { FC } from "react";
import InputLabel from "@/components/core/forms/atoms/InputLabel";
import Box from "@/components/core/ui/layout/Box";
import "@/styles/text-select.css";

const TextSelector: FC = () => {
  return (
    <Box containerClassName="relative z-0 w-full mb-5 group">
      <InputLabel label="Select an option" htmlFor="form-selector" />
      <select
        id="form-selector"
        className="custom-select border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 focus:outline-purple-500 block w-full p-2.5 "
      >
        <option value="" disabled selected>
          Inquiry Type
        </option>
        <option value="connect">Connect</option>
        <option value="prayer">Prayer</option>
        <option value="media">Media</option>
        <option value="other">Other</option>
      </select>
    </Box>
  );
};

export default TextSelector;
