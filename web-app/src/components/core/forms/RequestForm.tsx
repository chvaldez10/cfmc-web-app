import { FC, useState } from "react";
import TextInput from "./atoms/TextInput";
import TextSelector from "./atoms/TextSelector";
import TextArea from "./atoms/TextArea";
import { FormButton } from "../buttons";

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
      <TextSelector />
      <TextArea id="message" label="Message" />
      <div className="flex justify-end">
        <FormButton className="text-purple-500 hover:underline">
          Submit
        </FormButton>
      </div>
    </form>
  );
};

export default RequestForm;
