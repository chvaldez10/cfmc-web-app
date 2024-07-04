import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLogoProps {
  className: string;
}

const NavLogo: FC<NavLogoProps> = ({ className }) => (
  <Link href="/" className={`flex items-center rtl:space-x-reverse ml-5`}>
    <Image
      src="/branding/logo_no_bg.png"
      alt="CFMC Logo"
      height={52}
      width={32}
      style={{ height: 52, width: 32 }}
      priority={true}
    />
    <div
      className={`self-center font-bold flex flex-col text-sm md:text-lg ml-2 ${className}`}
    >
      <span>Calgary Filipino</span>
      <span>Methodist Church</span>
    </div>
  </Link>
);

export default NavLogo;
