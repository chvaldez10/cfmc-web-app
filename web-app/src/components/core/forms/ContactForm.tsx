import { FC } from "react";
import { Flex, SectionSubheader, LongParagraph } from "@/components/core/ui";
import {
  contactUsVerbiage,
  contactUsFooterVerbiage,
} from "@/data/hero/constants";
import TextLabel from "./atoms/InputLabel";

const ContactForm: FC = () => {
  return (
    <Flex containerClassName="container px-5 py-24 mx-auto flex ">
      <Flex containerClassName="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md bg-white-0">
        <SectionSubheader text="Contact Us" />
        <LongParagraph containerClassName="text-gray-600 my-2">
          {contactUsVerbiage}
        </LongParagraph>
        <div className="relative mb-4">
          <TextLabel label="Email" htmlFor="email" />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <TextLabel label="Message" htmlFor="message" />
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Button
        </button>
        <p className="text-xs text-gray-500 mt-3">{contactUsFooterVerbiage}</p>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
