import { FC } from "react";
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
import InputLabel from "@/components/core/forms/atoms/InputLabel";
import TextArea from "@/components/core/forms/atoms/TextArea";
import TextInput from "@/components/core/forms/atoms/TextInput";

const ContactForm: FC = () => {
  return (
    <Flex containerClassName="container px-5 py-24 mx-auto flex">
      <Flex containerClassName="w-full md:w-1/2 lg:w-5/12 mt-10 md:mt-0 md:ml-auto rounded-lg p-8 flex flex-col relative z-10 shadow-md bg-white-0 space-y-2">
        {/* Contact Form Header */}
        <SectionSubheader text="Contact Us" />
        <LongParagraph containerClassName="long-paragraph-text-color">
          {
            "If you have any questions or need assistance, please feel free to contact us."
          }
        </LongParagraph>

        {/* Contact Form */}
        <Box>
          <InputLabel label="Email" htmlFor="email" />
          <TextInput
            type="email"
            id="email"
            name="email"
            placeholder="first.last@email.com"
          />
        </Box>
        <TextArea id="contact-message" label="Message" />
        <HorizontalLine />

        {/* Contact Form Footer */}
        <SmallText containerClassName="long-paragraph-text-color">
          <>
            {
              "For urgent matters, please call us at (555) 555-5555 or email us at "
            }
            <Link href="mailto:info@example.com">first.last@email.com</Link>
          </>
        </SmallText>

        {/* Contact Form Submit Button */}
        <Flex containerClassName="flex justify-end">
          <FormButton className="text-purple-500 hover:underline">
            Submit
          </FormButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
