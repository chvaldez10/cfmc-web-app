import { FC } from "react";

const TextSelector: FC = () => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="form-selector"
        className="block mb-2 text-sm font-medium "
      >
        Select an option
      </label>
      <select
        id="form-selector"
        className="border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 focus:outline-purple-500 block w-full p-2.5 "
      >
        <option value="" disabled selected>
          Inquiry Type
        </option>
        <option value="connect">Connect</option>
        <option value="prayer">Prayer</option>
        <option value="media">Media</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default TextSelector;
