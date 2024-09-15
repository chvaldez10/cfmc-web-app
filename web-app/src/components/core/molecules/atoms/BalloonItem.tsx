"use client";

import { FC, useEffect, useState } from "react";
import { LongParagraph } from "@/components/core/ui";
import "@/styles/balloon.css";

interface BalloonItemProps {
  month: string | undefined;
  day: number | undefined;
  fullName: string;
}

// Helper functions to generate random values
const getRandomHue = (): number => Math.floor(Math.random() * 360);
const getRandomDuration = (): number => Math.random() * 2 + 3;
const getRandomTranslateY = (): number => Math.random() * 30 + 20;
const getRandomRotation = (): number => Math.random() * 8 - 4;

const BalloonItem: FC<BalloonItemProps> = ({ fullName, month, day }) => {
  const [balloonColor, setBalloonColor] = useState<string>("");
  const [stringColor, setStringColor] = useState<string>("");
  const [animationDuration, setAnimationDuration] = useState<number>(4);
  const [translateY, setTranslateY] = useState<number>(25);
  const [rotation, setRotation] = useState<number>(4);

  useEffect(() => {
    const randomHue = getRandomHue();
    const balloonHSL = `hsl(${randomHue}, 60%, 65%)`;
    const stringHSL = `hsl(${randomHue}, 40%, 50%)`;

    setBalloonColor(balloonHSL);
    setStringColor(stringHSL);

    // Set random values for the animation
    setAnimationDuration(getRandomDuration());
    setTranslateY(getRandomTranslateY());
    setRotation(getRandomRotation());
  }, []);

  return (
    <div
      className="balloon"
      style={
        {
          "--balloon-color": balloonColor,
          "--string-color": stringColor,
          "--animation-duration": `${animationDuration}s`,
          "--translate-y": `${translateY}px`,
          "--rotate-angle": `${rotation}deg`,
        } as React.CSSProperties
      }
    >
      <LongParagraph containerClassName="text-white-0">
        {`${fullName} ${month} ${day}`}
      </LongParagraph>
    </div>
  );
};

export default BalloonItem;
