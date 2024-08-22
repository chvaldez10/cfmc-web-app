import { FC } from "react";
import { Flex, SectionSubheader, LongParagraph } from "@/components/core/ui";

import Image from "next/image";

const ImageGallery: FC = () => {
  return (
    <Flex containerClassName="container px-5 py-24 mx-auto flex flex-wrap resize-hero-width">
      <Flex containerClassName="flex flex-wrap items-center w-full space-x-4">
        <SectionSubheader text="Past events" />
        <LongParagraph containerClassName="">
          {`Check out some of the past events we've hosted.`}
        </LongParagraph>
      </Flex>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={500}
              height={300}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={501}
              height={301}
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <Image
              alt="gallery"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={600}
              height={360}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <Image
              alt="gallery"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={601}
              height={361}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={502}
              height={302}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={503}
              height={303}
            />
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default ImageGallery;
