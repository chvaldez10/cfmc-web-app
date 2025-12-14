import { FaEnvelope, FaMailBulk, FaHandshake } from "react-icons/fa";
import { DonationMethod } from "@/types/ui/components";
import { Branding } from "./enums";

export enum ContactFormLabels {
  FULL_NAME = "Full Name",
  EMAIL_ADDRESS = "Email Address",
  PHONE_NUMBER = "Phone Number",
  OPTIONAL = "(Optional)",
  WHAT_CAN_WE_HELP = "What can we help you with?",
  YOUR_MESSAGE = "Your Message",
  HOW_CAN_WE_HELP = "How Can We Help?",
  SEND_MESSAGE = "Send Message",
}

export enum ContactFormPlaceholders {
  ENTER_FULL_NAME = "Enter your full name",
  EMAIL_EXAMPLE = "your.email@example.com",
  PHONE_EXAMPLE = "(123) 456-7890",
  CHOOSE_OPTION = "Choose the best option",
  SHARE_MESSAGE = "Please share your thoughts, questions, or how we can help you...",
}

export enum ContactFormValidationMessages {
  ENTER_NAME = "Please enter your name",
  ENTER_EMAIL = "Please enter your email address",
  VALID_EMAIL = "Please enter a valid email address",
  SELECT_SUBJECT = "Please select at least one option",
  SHARE_MESSAGE = "Please share your message with us",
}

export enum ContactFormToastMessages {
  SUCCESS_TITLE = "Thank you for reaching out!",
  SUCCESS_DESCRIPTION = "We've received your message and will get back to you within 24 hours.",
  ERROR_TITLE = "Oops! Something went wrong",
  ERROR_DESCRIPTION = "Please try again or call us directly. We're here to help!",
  LOADING_TEXT = "Sending your message...",
}

export const CONTACT_US_CONTENT: { title: string; description: string }[] = [
  {
    title: "Contact Us",
    description:
      "We'd love to hear from you! Whether you're new to Calgary, exploring faith, looking for a church family, or simply have a question—we're here to help.",
  },
];

export const MEDIA_INQUIRY_CONTENT: { title: string; description: string }[] = [
  {
    title: "Need Media Help?",
    description:
      "Have photos, videos, music, or presentations you'd like to share during our services? Fill out the form below and our media team will help you get it ready for worship.",
  },
];

export const DONATION_METHODS: DonationMethod[] = [
  {
    icon: FaEnvelope,
    title: "E-Transfer",
    description: "Send directly to our church email",
    onCopyItem: Branding.CHURCH_E_TRANSFER_EMAIL,
  },
  {
    icon: FaMailBulk,
    title: "Mail",
    description: "Send checks or money orders by mail",
    onCopyItem: "Address: ",
  },
  {
    icon: FaHandshake,
    title: "In-Person",
    description: "Give during Sunday Worship Service",
  },
];
