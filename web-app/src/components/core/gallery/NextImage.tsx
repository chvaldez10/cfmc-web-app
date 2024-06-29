import { FC } from "react";
import Image from "next/image";
import { nextImage } from "@/types/genericTypes";

interface NextImageProps extends nextImage {}

const NextImage: FC<NextImageProps> = ({ src, alt, containerClassName }) => {
  return (
    <div
      className={`relative h-96 md:h-[50vh] 2xl:h-[55vh] ${containerClassName} pulse-once `}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: "cover" }}
        className="rounded-lg object-top"
      />
    </div>
  );
};

export default NextImage;
