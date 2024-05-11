import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC<{}> = () => (
  <Link href="/" className="flex items-center rtl:space-x-reverse">
    <Image
      src="/branding/logo_no_bg.png"
      height={44}
      width={38}
      alt="CFMC Logo"
    />
    <div className="self-center font-semibold flex flex-col text-base sm:text-lg md:text-xl lf:text-2xl ml-2">
      <span>Calgary Filipino</span>
      <span>Methodist Church</span>
    </div>
  </Link>
);

export default Logo;
