import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import './App.css';
import { AnimatePresence, motion } from "framer-motion";

const fetcher = (url) => fetch(url).then((res) => res.json());
const iconSize = window.innerWidth >= 3840 ? '512px' : window.innerWidth >= 1920 ? '256px' : '24px';

function Popup() {
  const { data, error } = useSWR('/api/prayerUTC', fetcher, {
    onLoadingSlow: () => {
      window.location.reload();
      return <div className="dark:text-white">Loading...</div>;
    },
    loadingTimeout: 10000,
    keepPreviousData: true,
    revalidateOnFocus: false,
    refreshInterval: 900000,
  });

  //const [timeToNextPrayer, setTimeToNextPrayer] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (data) {
      const {
        fajr_iqama,
        dhuhr_iqama,
        asr_iqama,
        maghrib_iqama,
        isha_iqama,
        next_fajr_iqama,
      } = data;

      const prayerTimes = [
        new Date(fajr_iqama),
        new Date(dhuhr_iqama),
        new Date(asr_iqama),
        new Date(maghrib_iqama),
        new Date(isha_iqama),
        new Date(next_fajr_iqama),
      ];

      const updateCountdown = () => {
        const now = new Date();
        const nextPrayerTime = prayerTimes.find((time) => time > now);

        if (nextPrayerTime) {
          const timeDifference = nextPrayerTime - now;

          // Show notification if the time is close to 0 (within 1 second)
          // for testing multiply by 60, 60 and how many hrs
          if (timeDifference <= 1000 && timeDifference > 0) {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 300000); // Hide after 5 minutes
          }
        } else {
        }
      };

      const intervalId = setInterval(updateCountdown, 1000);
      return () => clearInterval(intervalId);
    }
  }, [data]);

  if (error) {
    console.error('Error loading data:', error);
    return <div className="dark:text-white">Error loading data</div>;
  }

  return (
    <div>
      <AnimatePresence>
        {showNotification && (
          <motion.div className="fixed inset-0 bg-white dark:bg-zinc-900 flex items-center justify-center z-50 dark:text-white" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }}>
            <div className='text-center items-center text-center flex flex-col items-center justify-center space-y-10'>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-off" className='stroke-red-600'><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line></svg>
              <h1 className="text-8xl 4xl:text-12xl font-bold font-semibold mb-4">It is time for prayer!</h1>
              <h2 className='text-6xl 4xl:text-9xl'>Please turn off your phones. Jazakum Allahu Khairan</h2>
              <h2 className='text-6xl 4xl:text-9xl'>يرجى إيقاف تشغيل الهواتف. جزاكم الله خيراً</h2>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/*
    <button className='dark:text-white' onClick={() => { 
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 60000);
    }}>
      Test Notification Button
    </button>
    */}
    </div>
  );
}



export default Popup;
