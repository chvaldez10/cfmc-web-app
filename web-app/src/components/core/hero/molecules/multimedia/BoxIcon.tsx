import { FC } from "react";
import { Box, SectionSubheader } from "@/components/core/ui/";
import { CardInquiry } from "@/types/genericTypes";

interface BoxIconProps {
  cardInquiries: CardInquiry[];
}

const BoxIcon: FC<BoxIconProps> = ({ cardInquiries }) => {
  return (
    <Box containerClassName="bg-white-0 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl space-y-4 w-full">
      <SectionSubheader text="Join The Ministry" />
      <ul className="space-y-4">
        {cardInquiries.map((inquiry) => (
          <li className="flex items-center" key={inquiry.label}>
            {inquiry.svgIcon}
            <span>{inquiry.label}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default BoxIcon;
