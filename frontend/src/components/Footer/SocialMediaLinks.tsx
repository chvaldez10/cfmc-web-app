import { FC } from "react";
import { socialPlatforms } from "@/data/footer/FooterData";
import Link from "next/link";

const SocialMediaLinks: FC = () => (
  <div className="flex space-x-4 lg:mb-0 mb-6">
    {socialPlatforms.map(({ label, url, icon }) => (
      <Link key={label} href={url} className="text-gray-600 hover:text-red-400">
        <div className="text-2xl">{icon}</div>
      </Link>
    ))}
  </div>
);

export default SocialMediaLinks;
