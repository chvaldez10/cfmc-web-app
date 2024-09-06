import { FC } from "react";
import { FlexCenter, Box } from "@/components/core/ui";

interface PDFViewerProps {
  src: string;
}

const PDFViewer: FC<PDFViewerProps> = ({ src }) => {
  return (
    <FlexCenter containerClassName="w-full mx-auto h-[80vh]">
      <iframe
        src={src}
        className="w-full h-screen 
        border border-gray-300 rounded-lg shadow-lg hover:shadow-xl"
        title="PDF Viewer"
      />
    </FlexCenter>
  );
};

export default PDFViewer;
