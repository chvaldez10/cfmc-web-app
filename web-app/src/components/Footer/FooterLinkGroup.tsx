import Link from "next/link";
import { FC } from "react";

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
    <div className="w-full lg:w-4/12 ml-auto">
      <span className="block uppercase text-gray-600 text-sm  underline font-bold mb-2">
        {title}
      </span>
      <ul>
        {footerLinks.map(({ link, label }, index) => (
          <li key={index}>
            <Link
              href={link}
              className="text-gray-600 hover:text-purple-500 font-semibold block pb-2 text-sm"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
