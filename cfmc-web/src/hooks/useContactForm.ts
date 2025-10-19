"use client";

import { useState, useCallback } from "react";
import { FormData, FormErrors } from "@/types/ui/forms";
import {
  ContactFormValidationMessages,
  ContactFormToastMessages,
} from "@/constants/shared/contact";
import { submitContactForm } from "@/lib/supabase/actions/contact-submissions";
import { toaster } from "@/components/ui/toaster";

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: [],
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = useCallback(
    (field: keyof FormData, value: string | string[]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    },
    [errors]
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim())
      newErrors.name = ContactFormValidationMessages.ENTER_NAME;
    if (!formData.email.trim()) {
      newErrors.email = ContactFormValidationMessages.ENTER_EMAIL;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = ContactFormValidationMessages.VALID_EMAIL;
    }
    if (formData.subject.length === 0)
      newErrors.subject = ContactFormValidationMessages.SELECT_SUBJECT;
    if (!formData.message.trim())
      newErrors.message = ContactFormValidationMessages.SHARE_MESSAGE;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        toaster.create({
          title: ContactFormToastMessages.SUCCESS_TITLE,
          description: ContactFormToastMessages.SUCCESS_DESCRIPTION,
          type: "success",
          duration: 5000,
        });

        // Reset form on successful submission
        setFormData(initialFormData);
        return true;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toaster.create({
        title: ContactFormToastMessages.ERROR_TITLE,
        description:
          error instanceof Error
            ? error.message
            : ContactFormToastMessages.ERROR_DESCRIPTION,
        type: "error",
        duration: 5000,
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
}
