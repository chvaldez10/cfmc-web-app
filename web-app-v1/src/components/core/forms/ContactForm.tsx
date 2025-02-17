"use client";

import { FC, useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import {
  Flex,
  SectionSubheader,
  LongParagraph,
  FormButton,
  HorizontalLine,
} from "@/components/core/ui";
import {
  InputLabel,
  TextArea,
  TextInput,
  TextSelector,
} from "@/components/core/forms/";
import { InquiryConfirmationScreen } from "@/components/core/screens";

// Supabase Actions
import { createMemberInquiry } from "@/utils/supabase/actions/memberInquiryActions";

const ContactForm: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await createMemberInquiry(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Flex containerClassName="container px-4 mx-auto flex">
        <Flex containerClassName="contact-form-style">
          <InquiryConfirmationScreen longParagraph="Thank you for contacting us. We will get back to you as soon as possible." />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex containerClassName="container px-4 mx-auto flex">
      <form onSubmit={handleSubmit} className="contact-form-style">
        {/* Contact Form Header */}
        <SectionSubheader text="Contact Us" containerClassName="font-bold" />
        <LongParagraph containerClassName="long-paragraph-text-color">
          {
            "If you have any questions or need assistance, please feel free to contact us."
          }
        </LongParagraph>

        {/* Email Input */}
        <>
          <InputLabel label="Email" htmlFor="email" />
          <TextInput
            type="email"
            id="email"
            name="email"
            placeholder="first.last@email.com"
            required
          />
        </>

        {/* Message Input */}
        <TextArea id="contact-message" label="Message" />
        <HorizontalLine />

        {/* Hidden Selector */}
        <TextSelector
          defaultSelectedItem="contact"
          name="inquiryType"
          containerClassName="hidden"
        />

        {/* Contact Form Footer */}
        <p className="long-paragraph-text-color text-sm lg:text-lg leading-relaxed">
          For urgent matters, please call us at (555) 555-5555 or email us at{" "}
          <Link href="mailto:info@example.com" className="underline">
            first.last@email.com
          </Link>
        </p>

        {/* Contact Form Submit Button */}
        <Flex containerClassName="flex justify-end">
          <FormButton className="text-purple-500 hover:underline">
            Submit
          </FormButton>
        </Flex>
      </form>
    </Flex>
  );
};

export default ContactForm;
