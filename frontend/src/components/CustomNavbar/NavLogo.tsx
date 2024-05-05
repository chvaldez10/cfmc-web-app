import { FC } from "react";
import Image from "next/image";

const Logo: FC = () => (
  <a href="#" className="flex items-center rtl:space-x-reverse">
    <Image
      src="/branding/logo_no_bg.png"
      height={44}
      width={38}
      alt="CFMC Logo"
    />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      CFMC
    </span>
  </a>
);

export default Logo;
