import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold,
    };

    // Callback function to check for intersection
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    };

    // Intersection instance given the callback and options
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to unobserve the element
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
};

export default useInView;
