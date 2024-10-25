"use client";

import { FC, useState } from "react";
import Link from "next/link";
import {
  Flex,
  Box,
  SectionSubheader,
  LongParagraph,
  FormButton,
  SmallText,
  HorizontalLine,
} from "@/components/core/ui";
import { InputLabel, TextArea, TextInput } from "@/components/core/forms/";
import { InquiryConfirmationScreen } from "@/components/core/screens";
import { createMemberInquiry } from "@/utils/supabase/actions/memberInquiryActions";

// TODO: Cleanup this form
const ContactForm: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await createMemberInquiry(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    // TODO: Fix this layout
    return (
      <InquiryConfirmationScreen longParagraph="Thank you for contacting us. We will get back to you as soon as possible." />
    );
  }

  return (
    <Flex containerClassName="container px-4 mx-auto flex">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 lg:w-5/12 mt-10 md:mt-0 md:ml-auto rounded-lg p-8 flex flex-col relative z-10 shadow-md bg-white-0 space-y-2"
      >
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

        {/* Contact Form Footer */}
        <SmallText containerClassName="long-paragraph-text-color">
          <>
            {
              "For urgent matters, please call us at (555) 555-5555 or email us at "
            }
            <Link href="mailto:info@example.com" className="underline">
              first.last@email.com
            </Link>
          </>
        </SmallText>

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
