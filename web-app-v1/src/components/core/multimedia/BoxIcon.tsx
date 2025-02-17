import { FC } from "react";
import { Box, SectionSubheader } from "@/components/core/ui/";
import { IconProps } from "@/types/uiProps";

interface BoxIconProps {
  cardInquiries: IconProps[];
  header: string;
}

const BoxIcon: FC<BoxIconProps> = ({ cardInquiries, header }) => {
  return (
    <Box containerClassName="bg-white-0 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl space-y-4 w-full">
      <SectionSubheader text={header} />
      <ul className="space-y-4">
        {cardInquiries.map((inquiry) => (
          <li className="flex items-center gap-2" key={inquiry.label}>
            {inquiry.svgIcon}
            <span>{inquiry.label}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default BoxIcon;
