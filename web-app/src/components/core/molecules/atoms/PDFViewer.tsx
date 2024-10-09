import { FC } from "react";
import { FlexCenter, LongParagraph } from "@/components/core/ui";

interface PDFViewerProps {
  src: string;
}

const PDFViewer: FC<PDFViewerProps> = ({ src }) => {
  return (
    <FlexCenter containerClassName="w-full h-screen md:h-[80vh] p-0 md:p-4">
      {src ? (
        <iframe
          src={src}
          className="w-full h-screen 
      border border-gray-300 rounded-lg shadow-lg hover:shadow-xl"
          title="PDF Viewer"
        />
      ) : (
        <LongParagraph>No PDF to display</LongParagraph>
      )}
    </FlexCenter>
  );
};

export default PDFViewer;
