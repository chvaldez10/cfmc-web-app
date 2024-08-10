import React from "react";
import { churchGoogleMapSrc } from "@/data/hero/constants";
import IframeMap from "@/components/core/hero/molecules/events/IframeMap";
import ContactForm from "@/components/core/forms/ContactForm";
import { Box } from "@/components/core/ui";

const ContactUs = () => {
  return (
    <Box containerClassName="relative">
      <Box containerClassName="absolute inset-0">
        <IframeMap src={churchGoogleMapSrc} containerClassName="contrast-75" />
      </Box>
      <ContactForm />
    </Box>
  );
};

export default ContactUs;
