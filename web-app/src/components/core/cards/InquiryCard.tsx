import { FC } from "react";
import InquiryCardItem from "./atoms/InquiryCardItem";
import { Grid } from "@/components/core/ui";
import { cardInquiries } from "@/data/hero";

const InquiryCard: FC = () => {
  return (
    <Grid containerClassName="w-full grid gap-4 grid-cols-1 md:grid-cols-3 py-8 bg-emerald-500 text-white-0 ">
      {cardInquiries.map((item, index) => (
        <InquiryCardItem
          key={index}
          label={item.label}
          description={item.description}
          svgIcon={item.svgIcon}
          url={item.url}
        />
      ))}
    </Grid>
  );
};

export default InquiryCard;
