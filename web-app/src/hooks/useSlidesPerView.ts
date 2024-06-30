import { useState, useEffect } from "react";

const useSlidesPerView = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return slidesPerView;
};

export default useSlidesPerView;
