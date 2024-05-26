import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardWithImageProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

const CardWithImage: FC<CardWithImageProps> = ({
  src,
  title,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm bg-white-0 border border-gray-200 rounded-lg shadow">
      <div className="relative h-48 w-full">
        <Image
          src={src}
          alt={title}
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-t-lg object-right"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CardWithImage;
