import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
};
