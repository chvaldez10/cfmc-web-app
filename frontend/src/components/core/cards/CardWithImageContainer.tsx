import { FC } from "react";
import CardWithImage from "./CardWithImage";

const CardWithImageContainer: FC<{}> = () => {
  return (
    <div className="w-full mx-auto p-5 md:p-0 items-center justify-center md:w-10/12 flex flex-col gap-4">
      <div className="w-full grid grid-rows-2 grid-cols-2 gap-4 py-8 text-white-0">
        <CardWithImage
          src="/featured/header/6.jpeg"
          title="title"
          description="I am description"
          link="/about/ministry"
        />
      </div>
    </div>
  );
};

export default CardWithImageContainer;
