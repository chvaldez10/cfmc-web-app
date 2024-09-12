"use client";

// code from https://github.com/timeToCode-ali/react_playground/tree/main/src/components/countdown
import { useState, useEffect, FC } from "react";
import "@/styles/countdown-timer.css";

const COUNTDOWN_TARGET = new Date("2024-09-15T00:00:00");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown: FC = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown">
      {/* <h2>Countdown</h2> */}
      <div className="content">
        {Object.entries(timeLeft).map((entry) => {
          const label = entry[0];
          const value = entry[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label"> {label} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
