import { FC } from "react";
import Image from "next/image";

interface ImageCollageItemProps {
  src: string;
  alt: string;
  containerClassName: string;
}

const ImageCollageItem: FC<ImageCollageItemProps> = ({
  src,
  alt,
  containerClassName,
}) => {
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

export default ImageCollageItem;
