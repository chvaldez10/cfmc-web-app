import { FC } from "react";
import Image from "next/image";
import { nextImage } from "@/types/genericTypes";

interface NextImageProps extends nextImage {
  width?: string;
  height?: string;
  containerClassName?: string | undefined;
  imageClassName?: string;
}

const NextImage: FC<NextImageProps> = ({
  src,
  alt,
  containerClassName = "",
  width = "w-full",
  height = "h-96",
  imageClassName = "rounded-lg object-top",
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
        className="rounded-lg object-top"
      />
    </div>
  );
};

export default NextImage;
