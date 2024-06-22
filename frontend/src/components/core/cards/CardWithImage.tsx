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
    <div className="bg-white-0 border flex flex-col border-gray-200 rounded-lg shadow hover-animation hover-up ">
      <div className="relative h-96 w-full">
        <Image
          src={src}
          alt={alt}
          fill={true}
          objectFit="cover"
          className="rounded-t-lg object-center"
        />
      </div>

      <div className="flex flex-col p-5 flex-grow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p className="mb-3 font-normal text-gray-600 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <PurplePillButton onClick={() => router.push(url)} variant="filled">
            Learn More <FaArrowRight />
          </PurplePillButton>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
