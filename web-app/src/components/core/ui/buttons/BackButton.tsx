"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <button
      onClick={() => router.back()}
      className="fixed bottom-8 left-8 bg-white-0/30 backdrop-blur-sm text-purple-600 shadow-lg z-50 hover:bg-white/50 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 button-style"
    >
      <IoMdArrowBack className="h-6 w-6" />
    </button>
  );
};

export default BackButton;
