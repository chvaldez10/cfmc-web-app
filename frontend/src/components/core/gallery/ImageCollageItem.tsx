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
    <div className={`relative ${containerClassName} pulse-once`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: "cover" }}
        className="rounded-lg object-center hover-animation hover-up single-pulse"
        // placeholder="blur"
      />
    </div>
  );
};

export default ImageCollageItem;
