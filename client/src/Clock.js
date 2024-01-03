import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState('');

  const tConvert = (inputTime) => {
    // Check correct time format and split into components
    let timeArray = inputTime.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [inputTime];

    if (timeArray.length > 1) { // If time format is correct
      timeArray = timeArray.slice(1);  // Remove full string match value
      timeArray[5] = +timeArray[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      timeArray[0] = +timeArray[0] % 12 || 12; // Adjust hours
    }
    return timeArray.join('');
  }

  const updateClock = () => {
    const now = new Date();
    let H = now.getHours();
    let M = now.getMinutes();
    let S = now.getSeconds();

    // Pad single-digit values with leading zeros
    H = H.toString().padStart(2, '0');
    M = M.toString().padStart(2, '0');
    S = S.toString().padStart(2, '0');

    const currentTime = H + ':' + M + ':' + S;
    const convertedTime = tConvert(currentTime);

    setTime(convertedTime);
  }

  useEffect(() => {
    // Update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, );

  return (
    <div id="clock">
      {time}
    </div>
  );
}

export default Clock;
