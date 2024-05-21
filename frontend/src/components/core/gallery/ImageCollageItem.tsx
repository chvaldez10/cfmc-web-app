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
    <div className={`relative ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: "cover" }}
        className="rounded-lg object-bottom animate-fadeIn"
      />
    </div>
  );
};

export default ImageCollageItem;