"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import PurplePillButton from "../buttons/PurplePillButton";
import { useRouter } from "next/navigation";
interface CardWithImageProps {
  src: string;
  title: string;
  alt: string;
  description: string;
  url: string;
}

const CardWithImage: FC<CardWithImageProps> = ({
  src,
  title,
  alt,
  description,
  url,
}) => {
  const router = useRouter();

  return (
    <div className=" bg-white-0 border border-gray-200 rounded-lg shadow">
      <div className="relative h-96 w-full">
        <Image
          src={src}
          alt={alt}
          fill={true}
          objectFit="cover"
          className="rounded-t-lg object-center"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <PurplePillButton onClick={() => router.push(url)} variant="filled">
          Learn More <FaArrowRight />
        </PurplePillButton>
      </div>
    </div>
  );
};

export default CardWithImage;
