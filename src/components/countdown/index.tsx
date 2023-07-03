"use client"

import { useEffect, useState,useCallback } from 'react';
import { AiFillTag } from 'react-icons/ai'

function calculateRemainingTime(targetTime: number) {
    const currentTime = new Date().getTime();
    const remainingTime = targetTime - currentTime;

    if (remainingTime < 0) {
        // Countdown has reached or passed the target time
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
}

function Countdown() {
    const storedTargetTime = localStorage.getItem('targetTime');
    const initialTargetTime = storedTargetTime ? Number(storedTargetTime) : null;
  
    const [targetTime, setTargetTime] = useState(initialTargetTime);
  
    const calculateRemainingTimeCallback = useCallback(() => {
      return calculateRemainingTime(targetTime || 0);
    }, [targetTime]);
  
    const [count, setCount] = useState(calculateRemainingTimeCallback());
    const { days, hours, minutes, seconds } = count;

    useEffect(() => {
        if (!targetTime) {
          // Target time is not available, set a new target time
          const newTargetDate = new Date();
          newTargetDate.setDate(newTargetDate.getDate() + 30); // Add 30 days to the current date
          const newTargetTime = newTargetDate.getTime(); // Get the timestamp of the new target date
          setTargetTime(newTargetTime);
          localStorage.setItem('targetTime', newTargetTime.toString());
        }
    
        const timer = setInterval(() => {
          setCount(calculateRemainingTime(targetTime || 0));
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
    }, [targetTime]);
  

    //   when the countdown reaches zero
//   useEffect(() => {
//     if (count.days === 0 && count.hours === 0 && count.minutes === 0 && count.seconds === 0) {
//       console.log('Countdown completed!');
//     }
//   }, [count]);

  return (
    <div className='wrapper'>
      <div className='flex flex-col xls:flex-row justify-between items-center p-2 bg-secondary/80 text-white rounded-md relative'>
        <h2 className='flex items-center gap-2 font-medium'> <AiFillTag size={25} /> Flash Sales</h2>
        <h2 className='sm:absolute left-[50%] sm:translate-x-[-50%] text-sm ms:text-base font-semibold'>Time Left: {days}d : {hours}h : {minutes}m : {seconds}s</h2>
      </div>
    </div>
  );
}

export default Countdown;
