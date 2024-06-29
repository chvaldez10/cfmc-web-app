import { FC } from "react";
import Image from "next/image";
import { nextImage } from "@/types/genericTypes";

interface NextImageProps extends nextImage {
  width?: string;
  height: string;
  containerClassName?: string | undefined;
  imageClassName: string;
}

const NextImage: FC<NextImageProps> = ({
  src,
  alt,
  containerClassName = "",
  width = "",
  height,
  imageClassName,
}) => {
  return (
    <div
      className={`relative ${width} ${height} ${containerClassName} pulse-once `}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: "cover" }}
        className={`${imageClassName}`}
      />
    </div>
  );
};

export default NextImage;
