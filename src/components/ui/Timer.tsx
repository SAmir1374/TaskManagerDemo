import { useState, useEffect } from "react";

import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";
import IconButton from "./IconButton";

type Props = {
  second?: number;
  minute?: number;
  hour?: number;
  onPause?: ({
    seconds,
    minutes,
    hours,
  }: {
    seconds: number;
    minutes: number;
    hours: number;
  }) => void;
};

function Timer({ second = 0, minute = 0, hour = 0, onPause }: Props) {
  const [seconds, setSeconds] = useState<number>(second);
  const [minutes, setMinutes] = useState<number>(minute);
  const [hours, setHours] = useState<number>(hour);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;
    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 59) {
          setSeconds(0);
          if (minutes === 59) {
            setMinutes(0);
            setHours(hours + 1);
          } else {
            setMinutes(minutes + 1);
          }
        } else {
          setSeconds(seconds + 1);
        }
      }, 1000);
    } else if (onPause) {
      onPause({
        seconds,
        minutes,
        hours,
      });
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds, minutes, hours, onPause]);

  function handleStartStopClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="flex flex-row bg-white gap-2 items-center">
      <IconButton onClick={handleStartStopClick} className="p-0.5">
        {isActive ? (
          <PauseIcon className="stroke-white bg-red-400 rounded-full w-5 h-5" />
        ) : (
          <PlayIcon className="stroke-white bg-green-400 rounded-full w-5 h-5" />
        )}
      </IconButton>
      <span>{`${hours < 10 ? "0" : ""}${hours}:${
        minutes < 10 ? "0" : ""
      }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</span>
    </div>
  );
}

export default Timer;
