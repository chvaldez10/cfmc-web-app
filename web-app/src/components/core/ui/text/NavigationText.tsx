"use client";

import { FC, ReactNode } from "react";
import { FlexCenter } from "@/components/core/ui";
import { DivProps } from "@/types/genericTypes";
import { useRouter } from "next/navigation";

interface NavigationTextProps extends DivProps {
  url?: string;
}

const NavigationText: FC<NavigationTextProps> = ({
  url,
  children,
  containerClassName = "",
}) => {
  const router = useRouter();

  return (
    <div
      className={`div-outside-width text-center text-lg md:text-xl lg:text-2xl px-6 bg-white-10 rounded-md  ${containerClassName}`}
      onClick={url ? () => router.push(url) : undefined}
    >
      {children}
    </div>
  );
};

export default NavigationText;
