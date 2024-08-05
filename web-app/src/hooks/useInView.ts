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

    let currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to unobserve the element
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
};

export default useInView;
