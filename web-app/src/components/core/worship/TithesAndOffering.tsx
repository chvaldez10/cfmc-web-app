import { FC } from "react";
import { LongParagraph, Box } from "@/components/core/ui/";
import Link from "next/link";

interface SimpleModalItemProps {
  description: string;
}

const SimpleModalItem: FC<SimpleModalItemProps> = ({ description }) => {
  return (
    <Box containerClassName="p-4">
      <LongParagraph>{description}</LongParagraph>

      <LongParagraph>
        E-transfer:{" "}
        <Link
          href="mailto:calgaryfilipinomethodistchurch@yahoo.com"
          className="text-sm lg:text-lg leading-relaxed my-2  text-purple-500 hover:underline"
        >
          calgaryfilipinomethodistchurch@yahoo.com
        </Link>
      </LongParagraph>
    </Box>
  );
};

export default SimpleModalItem;
