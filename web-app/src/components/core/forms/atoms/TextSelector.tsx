import { FC } from "react";

const TextSelector: FC = () => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <label htmlFor="countries" className="block mb-2 text-sm font-medium ">
        Select an option
      </label>
      <select
        id="countries"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
      >
        <option value="" disabled selected>
          Choose a country
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

export default TextSelector;
