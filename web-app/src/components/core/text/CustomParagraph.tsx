"use client";

import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface CustomParagraphProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

const CustomParagraph: FC<CustomParagraphProps> = ({
  url,
  children,
  className = "",
}) => {
  const router = useRouter();

  return (
    <p
      className={`div-outside-width text-center text-lg md:text-xl lg:text-2xl px-6 bg-white-10 rounded-md  ${className}`}
      onClick={url ? () => router.push(url) : undefined}
    >
      {children}
    </p>
  );
};

export default CustomParagraph;
