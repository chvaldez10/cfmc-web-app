"use client";

import { FC, useEffect, useState } from "react";
import { Grid } from "@/components/core/ui";
import { heroCollageImages } from "@/data/hero/featuredItems";
import { NextImage } from "@/components/core/ui";
import { SHORT_ANIMATION_DELAY } from "@/data/constants/shared";

// TODO: Add props if needed
const HeroHomeCollage: FC = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  useEffect(() => {
    heroCollageImages.forEach((image, index) => {
      setTimeout(() => {
        setLoadedImages((prev) => [...prev, index]);
      }, index * SHORT_ANIMATION_DELAY);
    });
  }, []);

  return (
    <Grid
      containerClassName="hidden-grid-1-3 w-full 3xl:w-7/12"
      dataTestId="homepage-hero-collage"
    >
      {heroCollageImages.map((featuredImage, index) => (
        <div
          key={index}
          className={`opacity-0 ${
            loadedImages.includes(index) ? "animate-slide-up" : ""
          }`}
          style={{
            animationDelay: `${index * SHORT_ANIMATION_DELAY}ms`,
          }}
        >
          {loadedImages.includes(index) && (
            <NextImage
              key={index}
              height={"h-96 md:h-[50vh] 2xl:h-[55vh]"}
              src={featuredImage.src}
              alt={featuredImage.alt}
              containerClassName={featuredImage.containerClassName}
              imageClassName={"rounded-lg object-top"}
            />
          )}
        </div>
      ))}
    </Grid>
  );
};

export default HeroHomeCollage;
