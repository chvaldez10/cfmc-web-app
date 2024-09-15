import {
  Flex,
  Box,
  LongParagraph,
  LearnMoreButton,
  NextImage,
} from "@/components/core/ui";
import ImageContentProfile from "./ImageContentProfile";
import { pastEvents1 } from "@/data/hero/featuredItems";
import { getChurchMembersByID } from "@/utils/supabase/actions/churchMembersActions";
import { EmptySetFromSupabase } from "@/components/template/";

interface ImageContentProps {
  id: number;
}

async function ImageContent({ id }: ImageContentProps) {
  const churchMemberData = await getChurchMembersByID(id);

  if (!churchMemberData) {
    return <EmptySetFromSupabase longParagraph="No church member found" />;
  }

  return (
    <Flex containerClassName="container px-4 mx-auto flex flex-col">
      <Box containerClassName="resize-hero-width mx-auto">
        <NextImage
          width={"w-full"}
          height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
          src={pastEvents1[1].src}
          alt={"Image Content Image"}
          imageClassName={"rounded-lg object-center"}
        />
        <Flex containerClassName="flex flex-col sm:flex-row mt-10">
          <ImageContentProfile {...churchMemberData} />
          <Flex containerClassName="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col ">
            <LongParagraph containerClassName="text-gray-600">
              Super long content description goes here.
            </LongParagraph>
            <LearnMoreButton
              url="/events/from-bible-study"
              containerClassName="mx-auto sm:mx-0 pt-4"
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ImageContent;
