import { FC } from "react";
import { Box } from "@/components/core/ui";

const SVGWage: FC = () => {
  return (
    <Box containerClassName="hidden md:block absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        <path
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default SVGWage;
