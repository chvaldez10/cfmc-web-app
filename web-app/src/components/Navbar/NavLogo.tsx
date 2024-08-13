import { FC } from "react";
import { Flex } from "@/components/core/ui";
import Image from "next/image";
import Link from "next/link";

interface NavLogoProps {
  textClassName: string;
}

const NavLogo: FC<NavLogoProps> = ({ textClassName }) => (
  <Link href="/" className={`flex items-center rtl:space-x-reverse ml-5`}>
    <Image
      src="/branding/logo_no_bg.png"
      alt="CFMC Logo"
      height={52}
      width={32}
      style={{ height: 52, width: 32 }}
      priority={true}
    />
    <Flex
      containerClassName={`font-bold self-center flex flex-col text-sm md:text-lg ml-2 ${textClassName}`}
    >
      <span>Calgary Filipino</span>
      <span>Methodist Church</span>
    </Flex>
  </Link>
);

export default NavLogo;
