import { FC, ReactElement } from "react";
import InquiryCardItem from "./atoms/InquiryCardItem";
import { Grid } from "@/components/core/ui";

type CardContainerItem = {
  label: string;
  description: string;
  svgIcon: ReactElement;
};

interface InquiryCardProp {
  cardContainerItems: CardContainerItem[];
}

const InquiryCard: FC<InquiryCardProp> = ({ cardContainerItems }) => {
  return (
    <Grid containerClassName="w-full grid gap-4 grid-cols-1 md:grid-cols-3 py-8 bg-emerald-500 text-white-0 ">
      {cardContainerItems.map((item, index) => (
        <InquiryCardItem
          key={index}
          title={item.label}
          description={item.description}
          svgIcon={item.svgIcon}
        />
      ))}
    </Grid>
  );
};

export default InquiryCard;
