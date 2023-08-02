"use client"

import { useEffect, useState, useCallback } from 'react';
import { AiFillTag } from 'react-icons/ai';

function calculateRemainingTime(targetTime: number) {
  const currentTime = new Date().getTime();
  const remainingTime = targetTime - currentTime;

  // calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function Countdown({ targetTime }: { targetTime: number | null }) {
  const calculateRemainingTimeCallback = useCallback(() => {
    return calculateRemainingTime(targetTime || 0);
  }, [targetTime]);

  const [isActive, setIsActive] = useState(true);
  const [count, setCount] = useState(calculateRemainingTimeCallback());
  const { days, hours, minutes, seconds } = count;

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(calculateRemainingTime(targetTime || 0));
      if (targetTime && (days === 0 && hours === 0 && minutes === 0 && seconds === 0)) {
        setIsActive(false)
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, days, hours, minutes, seconds]);

  return (
    <>
      {targetTime && isActive && (
        <div className="wrapper">
          <div className="flex flex-col xls:flex-row justify-between items-center p-2 bg-secondary/80 text-white rounded-md relative">
            <h2 className="flex items-center gap-2 font-medium">
              <AiFillTag size={25} /> Flash Sales
            </h2>
            <h2 className="sm:absolute left-[50%] sm:translate-x-[-50%] text-sm ms:text-base font-semibold">
              Time Left: {days}d : {hours}h : {minutes}m : {seconds}s
            </h2>
          </div>
        </div>
      )}
    </>
  );
}

export default Countdown;