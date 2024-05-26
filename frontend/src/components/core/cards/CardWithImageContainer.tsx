import { FC } from "react";
import CardWithImage from "./CardWithImage";

const CardWithImageContainer: FC<{}> = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-8 text-white-0">
      <CardWithImage
        src="/featured/header/6.jpeg"
        title="title"
        description="I am description"
        link="/about/ministry"
      />
    </div>
  );
};

export default CardWithImageContainer;
