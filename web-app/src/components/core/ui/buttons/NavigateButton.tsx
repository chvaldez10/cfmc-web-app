"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { PurplePillButtonClient } from "@/components/core/ui";
import { clientButton } from "@/types/genericTypes";

interface NavigateButtonProps extends clientButton {
  url: string;
}

const NavigateButton: FC<NavigateButtonProps> = ({
  variant = "filled",
  className,
  children,
  url,
}) => {
  const router = useRouter();

  return (
    <PurplePillButtonClient
      onClick={() => router.push(url)}
      variant={variant}
      className={className}
    >
      {children}
    </PurplePillButtonClient>
  );
};

export default NavigateButton;
