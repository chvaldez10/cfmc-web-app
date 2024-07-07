import { FC } from "react";

interface MainGradientHeaderProps {
  text: string;
}

const MainGradientHeader: FC<MainGradientHeaderProps> = ({ text }) => {
  return (
    <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text text-transparent">
      {text}
    </h2>
  );
};

export default MainGradientHeader;
