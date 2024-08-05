import { useState, useEffect } from "react";

const useSlidesPerView = (
  breakpoints: { screenSize: number; slidesPerView: number }[]
) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let slidesPerView = 2;

      breakpoints.forEach((breakpoint) => {
        if (width >= breakpoint.screenSize) {
          slidesPerView = breakpoint.slidesPerView;
        }
      });

      setSlidesPerView(slidesPerView);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return slidesPerView;
};

export default useSlidesPerView;
