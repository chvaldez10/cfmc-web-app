import { FC } from "react";
import { FlexCenter, Box } from "@/components/core/ui";

interface PDFViewerProps {
  pdfFile: string;
}

const PDFViewer: FC<PDFViewerProps> = ({ pdfFile }) => {
  return (
    <FlexCenter containerClassName="p-4 resize-hero-width mx-auto h-[50vh] md:h-[80vh]">
      {/* <Box containerClassName="h-screen md:h-[80vh]"> */}
      <iframe
        src={`/documents/${pdfFile}`}
        className="w-full h-screen 
        border border-gray-300 rounded-lg shadow-lg hover:shadow-xl"
        title="PDF Viewer"
      />
      {/* </Box> */}
    </FlexCenter>
  );
};

export default PDFViewer;
