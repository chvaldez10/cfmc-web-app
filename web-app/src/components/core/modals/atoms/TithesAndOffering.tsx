import { FC } from "react";
import { clientButton } from "@/types/genericTypes";
import { SectionSubheader, LongParagraph } from "@/components/core/text/";
import { CloseButton } from "@/components/core/buttons";
import Link from "next/link";

interface SimpleModalItemProps extends clientButton {
  description: string;
}

const SimpleModalItem: FC<SimpleModalItemProps> = ({ description }) => {
  return (
    <>
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
    </>
  );
};

export default SimpleModalItem;
