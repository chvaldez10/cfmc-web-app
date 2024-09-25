import React from "react";
import { Grid } from "@/components/core/ui";
import { heroCollageImages } from "@/data/hero/featuredItems";
import { NextImage } from "@/components/core/ui";

interface HeroHomeCollageProps {}

const HeroHomeCollage: React.FC<HeroHomeCollageProps> = (props) => {
  return (
    <Grid
      containerClassName="hidden-grid-1-3 w-full 3xl:w-7/12"
      dataTestId="homepage-hero-grid"
    >
      {heroCollageImages.map((featuredImage, index) => (
        <div
          key={index}
          className={"opacity-0 animate-slide-up"}
          style={{
            animationDelay: `${index * 0.3}s`,
          }}
        >
          <NextImage
            key={index}
            height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
            src={featuredImage.src}
            alt={featuredImage.alt}
            containerClassName={featuredImage.containerClassName}
            imageClassName={"rounded-lg object-top"}
          />
        </div>
      ))}
    </Grid>
  );
};

export default HeroHomeCollage;
