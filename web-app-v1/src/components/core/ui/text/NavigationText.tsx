"use client";

import { FC } from "react";
import { FlexCenter } from "@/components/core/ui";
import { DivProps } from "@/types/layoutProps";
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
    <FlexCenter
      containerClassName={`text-center text-lg md:text-xl lg:text-2xl px-6 bg-white-10 rounded-md max-w-3xl ${containerClassName}`}
      onClick={url ? () => router.push(url) : undefined}
    >
      {children}
    </FlexCenter>
  );
};

export default NavigationText;
