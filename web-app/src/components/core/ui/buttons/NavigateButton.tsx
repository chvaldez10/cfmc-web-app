"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { PurplePillButtonClient } from "@/components/core/ui";
import { ClientButtonProps } from "@/types/uiProps";

interface NavigateButtonProps extends ClientButtonProps {
  url: string;
}

const NavigateButton: FC<NavigateButtonProps> = ({
  variant = "filled",
  containerClassName,
  children,
  url,
  disabled = false,
}) => {
  const router = useRouter();

  return (
    <PurplePillButtonClient
      onClick={() => router.push(url)}
      variant={variant}
      containerClassName={containerClassName}
      disabled={disabled}
    >
      {children}
    </PurplePillButtonClient>
  );
};

export default NavigateButton;
