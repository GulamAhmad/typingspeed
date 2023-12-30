import { useEffect, useState } from "react";
import "./time.css";
const Timer = ({ startTimer, correctWord }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [startTimer]);

  const minutes = time / 60;
  const speed = correctWord / minutes || 0;
  const acc = (correctWord / 39) * 100;
  return (
    <div className="timer">
      <p>time : {time}</p>
      <p>speed : {speed.toFixed(2)} Wpm</p>
      <p>accuracy : {acc.toFixed(2)}%</p>
    </div>
  );
};

export default Timer;

import PropTypes from "prop-types";

Timer.propTypes = {
  startTimer: PropTypes.bool.isRequired,
  correctWord: PropTypes.number.isRequired,
};
