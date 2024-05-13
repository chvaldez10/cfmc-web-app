import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC<{}> = () => (
  <Link href="/" className="flex items-center rtl:space-x-reverse">
    <Image
      src="/branding/logo_no_bg.png"
      height={32}
      width={24}
      alt="CFMC Logo"
      style={{ width: "auto", height: "auto" }}
      priority={true}
    />
    <div className="self-center font-semibold flex flex-col text-base sm:text-sm md:text-base ml-2">
      <span>Calgary Filipino</span>
      <span>Methodist Church</span>
    </div>
  </Link>
);

export default Logo;
