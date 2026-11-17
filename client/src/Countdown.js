import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import './App.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Countdown() {
  const { data, error } = useSWR('/api/prayerUTC', fetcher, {
    onLoadingSlow: () => {
      window.location.reload();
      return <div className="dark:text-white">Loading...</div>;
    },
    loadingTimeout: 10000,
    keepPreviousData: true,
    revalidateOnFocus: false,
  });

  const [timeToNextPrayer, setTimeToNextPrayer] = useState(null);

  useEffect(() => {
    if (data) {
      // Extract prayer times from data
      const {
        fajr_adhan,
        dhuhr_adhan,
        asr_adhan,
        maghrib_adhan,
        isha_adhan,
        next_fajr_adhan,
      } = data;

      // Create an array of prayer times
      const prayerTimes = [
        new Date(fajr_adhan),
        new Date(dhuhr_adhan),
        new Date(asr_adhan),
        new Date(maghrib_adhan),
        new Date(isha_adhan),
        new Date(next_fajr_adhan),
      ];

      // Find the next prayer time
      const updateCountdown = () => {
        const now = new Date();
        const nextPrayerTime = prayerTimes.find(time => time > now);

        // Calculate the time difference
        if (nextPrayerTime) {
          const timeDifference = nextPrayerTime - now;
          setTimeToNextPrayer(timeDifference);
        } else {
          // If all prayer times have passed for the day, set timeToNextPrayer to null
          setTimeToNextPrayer(null);
        }
      };

      // Run immediately on data load
      updateCountdown();

      // Align timer to the exact next second boundary, then tick every 1000ms
      let intervalId;
      const timeoutId = setTimeout(() => {
        updateCountdown();
        intervalId = setInterval(updateCountdown, 1000);
      }, 1000 - (Date.now() % 1000));

      // Clear timer on component unmount or data change
      return () => {
        clearTimeout(timeoutId);
        if (intervalId) clearInterval(intervalId);
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [data]);

  if (error) {
    console.error('Error loading data:', error);
    return <div className='dark:text-white'>Error loading data</div>;
  }

  //   if (isLoading || !data || timeToNextPrayer === null) {
  //     return <Loading />;
  //   }

  if (timeToNextPrayer === null) {
    return (
      <div>
        <p>--:--:--</p>
      </div>
    );
  }

  // Convert milliseconds using Math.ceil so Clock + Countdown = Target Prayer Time exactly
  const totalSeconds = Math.max(0, Math.ceil(timeToNextPrayer / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Add leading zero if single digit
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Format the countdown as H:m:s
  const formattedCountdown = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  return (
    <div>
      <p>{formattedCountdown}</p>
    </div>
  );
}

export default Countdown;
