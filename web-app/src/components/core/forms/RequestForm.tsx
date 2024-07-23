import { FC, useState } from "react";
import LoginInput from "./atoms/LoginInput";
import TextInput from "./atoms/TextInput";

const RequestForm: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    option: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextInput type="text" name="fullName" id="fullName" label="Full Name" />
      <TextInput type="email" name="email" id="email" label="Email" required />
      <TextInput
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        label="Phone Number"
        maxLength={10}
      />

      <div>
        <label
          htmlFor="option"
          className="block text-sm font-medium text-gray-700"
        >
          Select an option
        </label>
        <select
          name="option"
          id="option"
          value={formData.option}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message (required)
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RequestForm;
