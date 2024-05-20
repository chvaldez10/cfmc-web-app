// components/ImageCollage.tsx
import React from "react";

const images = [
  "https://www.tailwindtap.com/assets/components/gallery/image1.jpg",
  "https://www.tailwindtap.com/assets/components/gallery/image2.jpg",
  "https://www.tailwindtap.com/assets/components/gallery/image7.jpg",
  "https://www.tailwindtap.com/assets/components/gallery/image9.jpg",
];

const ImageCollage: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start p-5 lg:py-12 lg:px-32 bg-gradient-to-r from-blue-50 to-purple-100"></div>
  );
};

export default ImageCollage;
