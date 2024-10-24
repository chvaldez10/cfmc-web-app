import React from "react";
import { CHURCH_GOOGLE_MAP_SRC } from "@/data/constants/shared";
import { IframeMap } from "@/components/core/molecules";
import ContactForm from "@/components/core/forms/ContactForm";
import { Box } from "@/components/core/ui";

const ContactUs = () => {
  return (
    <Box containerClassName="py-24 max-w-screen-xl min-h-screen mx-auto justify-center">
      <Box containerClassName="relative min-h-[50vh]">
        <Box containerClassName="absolute inset-0">
          <IframeMap
            src={CHURCH_GOOGLE_MAP_SRC}
            containerClassName="contrast-75"
          />
        </Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactUs;
