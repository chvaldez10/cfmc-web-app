import {
  VerticalTimeline,
  HeroWaveHeader,
  BoxIcon,
  HeroSlideClient,
} from "@/components/core/hero";
import { Box } from "@/components/core/ui";
import { multimediaInquiries } from "@/data/hero/mediaInquiries";
import RequestForm from "@/components/core/forms/RequestForm";

export default function page() {
  return (
    <>
      <HeroWaveHeader
        header="Inquiries"
        longParagraph="The multimedia is involved in a wide range of projects and tasks. Please read below for more information."
        containerClassName="bg-gradient-to-r from-white-10 to-green-10 overflow-hidden"
      >
        <BoxIcon
          cardInquiries={multimediaInquiries}
          header="Inquire about the Following"
        />
      </HeroWaveHeader>
      <Box containerClassName="py-12"></Box>
      <VerticalTimeline />

      <HeroSlideClient
        header={"Request Form"}
        longParagraph={
          "Please fill out the request form for all multimedia inquiries. For our safety, all attachments must be emailed to the following address: firstname.lastname@gmail.com"
        }
        containerClassName="min-h-screen"
        isFloating={true}
      >
        <RequestForm defaultSelectedItem={"Media"} />
      </HeroSlideClient>
    </>
  );
}
