import { FC, useState } from "react";
import TextInputLabel from "./atoms/TextInputLabel";
import TextSelector from "./atoms/TextSelector";
import TextArea from "./atoms/TextArea";
import { FormButton } from "@/components/core/ui";

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
    <form onSubmit={handleSubmit} className=" space-y-4 z-50 ">
      <TextInputLabel
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Full Name"
      />
      <TextInputLabel
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <TextInputLabel
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
        maxLength={10}
      />
      <TextSelector />
      <TextArea id="message" label="Message" />
      <div className="flex justify-end">
        <FormButton className="text-emerald-500 hover:underline">
          Submit
        </FormButton>
      </div>
    </form>
  );
};

export default RequestForm;
