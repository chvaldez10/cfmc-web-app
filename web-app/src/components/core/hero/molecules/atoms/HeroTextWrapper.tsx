import { FC, ReactNode } from "react";

interface HeroTextWrapperProps {
  children: ReactNode;
}

const HeroTextWrapper: FC<HeroTextWrapperProps> = ({ children }) => {
  return (
    <div className="div-outside-width z-10 xl:max-w-4xl gap-4 text-center">
      {children}
    </div>
  );
};

export default HeroTextWrapper;
