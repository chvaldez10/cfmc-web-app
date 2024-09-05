import { FC } from "react";
import { FlexCenter, Box } from "@/components/core/ui";

interface PDFViewerProps {
  pdfFile: string;
}

const PDFViewer: FC<PDFViewerProps> = ({ pdfFile }) => {
  return (
    // TODO: Improve styling
    <FlexCenter containerClassName="w-full mx-auto h-[80vh]">
      <iframe
        src={`/documents/${pdfFile}`}
        className="w-full h-screen 
        border border-gray-300 rounded-lg shadow-lg hover:shadow-xl"
        title="PDF Viewer"
      />
    </FlexCenter>
  );
};

export default PDFViewer;
