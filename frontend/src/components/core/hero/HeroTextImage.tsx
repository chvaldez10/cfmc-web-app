import { FC } from "react";
import Image from "next/image";
import SectionHeader from "../text/SectionHeader";

interface HeroTextImageProps {
  header: string;
  subheader: string;
}

const HeroTextImage: FC<HeroTextImageProps> = ({ header, subheader }) => {
  return (
    <section className="px-3 py-5 bg-neutral-50 lg:py-10">
      <div className="grid lg:grid-cols-2 mx-auto lg:w-9/12 items-center justify-items-center gap-5">
        <div className="order-1 lg:order-1">
          <Image
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
            src="https://images.unsplash.com/photo-1536063766742-b514ee70707f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Summer Sale"
            width={500}
            height={500}
          />
        </div>

        {/* Text column */}
        <div className="order-2 lg:order-2 flex flex-col justify-center items-center text-center space-y-4 lg:space-y-6">
          <p className="text-2xl lg:text-4xl font-bold text-purple-500">
            {subheader}
          </p>

          <SectionHeader text={header} />
          <p className="mt-2 text-sm lg:text-lg leading-relaxed">
            Children, obey your parents in the Lord, for this is right. “Honor
            your father and mother”—which is the first commandment with a
            promise— “so that it may go well with you and that you may enjoy
            long life on the earth.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroTextImage;
