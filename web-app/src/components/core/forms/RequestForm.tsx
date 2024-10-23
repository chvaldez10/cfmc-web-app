"use client";

import { FC } from "react";
import TextInputLabel from "./atoms/TextInputLabel";
import TextSelector from "./atoms/TextSelector";
import TextArea from "./atoms/TextArea";
import { FormButton } from "@/components/core/ui";
import { createMemberInquiry } from "@/utils/supabase/actions/memberInquiryActions";

interface RequestFormProps {
  defaultSelectedItem: string;
}

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  await createMemberInquiry(formData);
};

const RequestForm: FC<RequestFormProps> = ({ defaultSelectedItem }) => {
  return (
    <form className="space-y-4 z-50 w-full p-4" onSubmit={handleSubmit}>
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
      <TextSelector
        defaultSelectedItem={defaultSelectedItem}
        name="inquiryItem"
      />
      <TextArea id="message" label="Message" name="message" />
      <div className="flex justify-end">
        <FormButton className="text-purple-500 hover:underline">
          Submit
        </FormButton>
      </div>
    </form>
  );
};

export default RequestForm;
