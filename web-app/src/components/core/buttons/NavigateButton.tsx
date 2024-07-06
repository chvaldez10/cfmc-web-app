"use client";

import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";
import PurplePillButtonClient from "./PurplePillButtonClient";

interface NavigateButtonProps {
  url: string;
  variant?: "filled" | "outline";
  className?: string;
  children?: ReactNode;
}

const NavigateButton: FC<NavigateButtonProps> = ({
  url,
  variant = "filled",
  className,
  children,
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
