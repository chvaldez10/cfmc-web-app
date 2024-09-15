import { FC } from "react";

interface IframeMapProps {
  src: string | undefined;
  containerClassName?: string;
}

const IframeMap: FC<IframeMapProps> = ({ src, containerClassName }) => {
  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      className={`rounded-lg shadow-lg border-4 border-white-0 ${containerClassName}`}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default IframeMap;
