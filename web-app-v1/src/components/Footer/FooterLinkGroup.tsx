import Link from "next/link";
import { FC } from "react";
import { Box, LongParagraph } from "@/components/core/ui";

interface FooterLinks {
  link: string;
  label: string;
}

interface LinkGroupProps {
  title: string;
  footerLinks: FooterLinks[];
}

const FooterLinkGroup: FC<LinkGroupProps> = ({ title, footerLinks }) => {
  return (
    <Box containerClassName="w-full lg:w-4/12 ml-auto space-y-1">
      <LongParagraph containerClassName="block uppercase font-bold ">
        {title}
      </LongParagraph>
      <ul className="space-y-2">
        {footerLinks.map(({ link, label }, index) => (
          <li key={index}>
            <Link
              href={link}
              className="text-gray-600 font-medium block text-sm underline hover:text-purple-600"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FooterLinkGroup;
