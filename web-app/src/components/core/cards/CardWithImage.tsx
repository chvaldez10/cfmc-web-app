import { FC } from "react";
import CardWithImageItem from "./atoms/CardWithImageItem";
import { cardWithImageItems } from "@/data/hero/cardWithImage";
import { FlexCenter, Grid } from "@/components/core/ui";

const CardWithImage: FC<{}> = () => {
  return (
    <FlexCenter containerClassName="mx-auto p-4 md:p-0 gap-4 ">
      <Grid containerClassName="resize-hero-width grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4 py-8 ">
        {cardWithImageItems.map((item, index) => (
          <CardWithImageItem
            key={item.title}
            src={item.src}
            title={item.title}
            alt={item.alt}
            description={item.description}
            url={item.url}
          />
        ))}
      </Grid>
    </FlexCenter>
  );
};

export default CardWithImage;
