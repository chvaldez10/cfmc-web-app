import { HeroWaveHeader, HeroSlideClient } from "@/components/core/hero";
import { VerticalTimeline, BoxIcon } from "@/components/core/multimedia";
import { Box } from "@/components/core/ui";
import { multimediaInquiries } from "@/data/hero/mediaInquiries";
import RequestForm from "@/components/core/forms/RequestForm";
import { mediaInquiries } from "@/data/hero/";

export default function page() {
  return (
    <>
      {/* Inquiries Header */}
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

      {/* Inquiries Timeline */}
      <VerticalTimeline items={mediaInquiries} />

      {/* Request Form */}
      <HeroSlideClient
        header={"Request Form"}
        longParagraph={
          "Fill out the request form for all multimedia inquiries. Attachments must be emailed to: firstname.lastname@gmail.com"
        }
        containerClassName="min-h-[60vh] lg:min-h-[50vh] bg-white-10"
        dataTestId="hero-slide-request-form"
        isFloating={true}
      >
        <RequestForm defaultSelectedItem={"Media"} />
      </HeroSlideClient>
    </>
  );
}
