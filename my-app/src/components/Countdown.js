import React, { useState, useEffect } from 'react';

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div class="time flex space-around">
          <div>
            <div class="headerTime">{timeLeft.days}</div>
              <div>Days</div>
            </div>
            <div>
              <div class="headerTime">{timeLeft.hours}</div>
              <div>Hours</div>
            </div>
            <div>
              <div class="headerTime">{timeLeft.minutes}</div>
              <div>Min</div>
            </div>
            <div>
              <div class="headerTime">{timeLeft.seconds}</div>
              <div>Sec</div>
            </div>
          </div>
    </div>
  );
}

export default Countdown;
