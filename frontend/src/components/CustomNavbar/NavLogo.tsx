import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC<{}> = () => (
  <Link href="/" className="flex items-center rtl:space-x-reverse ml-5">
    <Image
      src="/branding/logo_no_bg.png"
      height={50}
      width={32}
      alt="CFMC Logo"
      style={{ width: 32, height: 52 }}
      priority={true}
    />
    <div className="self-center font-bold flex flex-col sm:text-sm md:text-base ml-2">
      <span>Calgary Filipino</span>
      <span>Methodist Church</span>
    </div>
  </Link>
);

export default Logo;
