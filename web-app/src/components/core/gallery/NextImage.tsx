import { FC } from "react";
import Image from "next/image";
import { ImageProps } from "@/types/genericTypes";

interface NextImageProps extends ImageProps {
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
    // The outer div is used to set the width and height of the image
    <div
      className={`relative ${width} ${height} ${containerClassName} pulse-once `}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        sizes="width: 100%"
        style={{ objectFit: "cover" }}
        className={`${imageClassName}`}
        loading="lazy"
      />
    </div>
  );
};

export default NextImage;
