import { FC } from "react";
import MinistryDetailCardItem from "./atoms/MinistryDetailCardItem";
import { cardWithImageItems } from "@/data/hero/featuredItems";
import { FlexCenter, Grid } from "@/components/core/ui";

const MinistryDetailCards: FC = () => {
  return (
    <FlexCenter
      containerClassName="mx-auto gap-4 py-4"
      dataTestId={"ministry-detail-cards"}
    >
      <Grid containerClassName="resize-hero-width grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4">
        {cardWithImageItems.map((item, index) => (
          <MinistryDetailCardItem
            key={index}
            src={item.src}
            title={item.title}
            alt={item.alt}
            description={item.description}
            url={item.url}
            dataTestId={`ministry-detail-card-${item.title}`}
          />
        ))}
      </Grid>
    </FlexCenter>
  );
};

export default MinistryDetailCards;
