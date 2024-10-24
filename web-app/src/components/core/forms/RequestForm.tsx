"use client";

import { FC, useState, FormEvent } from "react";
import {
  TextInputLabel,
  TextSelector,
  TextArea,
} from "@/components/core/forms/";
import { FormButton, Flex } from "@/components/core/ui";
import { InquiryConfirmationScreen } from "@/components/core/screens";
import { createMemberInquiry } from "@/utils/supabase/actions/memberInquiryActions";

interface RequestFormProps {
  defaultSelectedItem: string;
}

const RequestForm: FC<RequestFormProps> = ({ defaultSelectedItem }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await createMemberInquiry(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <InquiryConfirmationScreen />;
  }

  return (
    <form className="space-y-4 z-50 p-4 w-full" onSubmit={handleSubmit}>
      {/* Full Name */}
      <TextInputLabel
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Full Name"
        required
      />

      {/* Email */}
      <TextInputLabel
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />

      {/* Phone Number */}
      <TextInputLabel
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
        maxLength={10}
      />

      {/* Inquiry Item */}
      <TextSelector
        defaultSelectedItem={defaultSelectedItem}
        name="inquiryItem"
      />

      {/* Message */}
      <TextArea id="inquiry-message" label="Message" rows={6} />

      {/* Submit Button */}
      <Flex containerClassName="justify-end">
        <FormButton className="text-purple-500 hover:underline">
          Submit
        </FormButton>
      </Flex>
    </form>
  );
};

export default RequestForm;
