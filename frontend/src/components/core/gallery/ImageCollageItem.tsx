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
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        className="rounded-lg object-center animate-fadeIn hover-up-animation"
      />
    </div>
  );
};

export default ImageCollageItem;
