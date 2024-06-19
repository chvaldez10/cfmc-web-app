import { FC } from "react";

interface LongParagraphProps {
  longParagraph: string;
}

const LongParagraph: FC<LongParagraphProps> = ({ longParagraph }) => {
  return (
    <p className="text-sm lg:text-lg leading-relaxed my-4">{longParagraph}</p>
  );
};

export default LongParagraph;
