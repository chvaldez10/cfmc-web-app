"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { getWaffleSwitch } from "@/utils/supabase/actions/waffleSwitchActions";

interface FormButtonProps {
  formAction?: (formData: FormData) => Promise<void>;
  children: ReactNode;
  className?: string;
}

const baseClass = "text-sm font-medium";

const FormButton: FC<FormButtonProps> = ({
  formAction = "",
  children,
  className = "",
}) => {
  const [enablePublicInquiry, setEnablePublicInquiry] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchEnablePublicInquiry = async () => {
      const enablePublicInquiry = await getWaffleSwitch(
        "enable_public_inquiry"
      );
      setEnablePublicInquiry(enablePublicInquiry?.isActive ?? false);
    };
    fetchEnablePublicInquiry();
  }, []);

  return (
    <button
      formAction={formAction}
      className={`${baseClass} ${className}`}
      disabled={!enablePublicInquiry}
    >
      {children}
    </button>
  );
};

export default FormButton;
