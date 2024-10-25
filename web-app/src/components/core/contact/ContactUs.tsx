import React from "react";
import { CHURCH_GOOGLE_MAP_SRC } from "@/data/constants/shared";
import { IframeMap } from "@/components/core/molecules";
import ContactForm from "@/components/core/forms/ContactForm";
import { Box, FlexCenter } from "@/components/core/ui";

const ContactUs = () => {
  return (
    <FlexCenter containerClassName="py-4">
      <Box containerClassName="relative py-24 min-h-[50vh] w-full md:w-10/12">
        <Box containerClassName="absolute inset-0">
          <IframeMap
            src={CHURCH_GOOGLE_MAP_SRC}
            containerClassName="contrast-75"
          />
        </Box>
        <ContactForm />
      </Box>
    </FlexCenter>
  );
};

export default ContactUs;
