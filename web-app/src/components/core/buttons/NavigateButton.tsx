"use client";

import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";
import PurplePillButtonClient from "./PurplePillButtonClient";
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
