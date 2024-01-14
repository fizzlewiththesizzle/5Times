import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import './App.css';
import mac_neo from './Calgary-neo.png';
import PageTransition from './PageTransition';

function Home() {
    const [prayerData, setPrayerData] = useState([]);
    const [nextPrayer, setNextPrayer] = useState('');

    // Detects if device is on iOS 
    const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    // Checks if should display install popup notification:
    let showPrompt = false;
    if (isIos() && !isInStandaloneMode()) {
      showPrompt = true;
    }
  
    useEffect(() => {
      const fetchPrayerData = () => {
        console.log('Fetching prayer data...');
        fetch('/api/prayer')
          .then(response => response.json())
          .then(data => {
            console.log('Prayer data received:', data);
            setPrayerData(data);
            localStorage.setItem('prayerData', JSON.stringify(data)); // Save data to local storage
          })
          .catch(error => console.error('Error fetching prayer data:', error));
  
        fetch('/api/nextPrayer')
          .then(response => response.json())
          .then(data => {
            console.log('Next prayer received: ', data);
            setNextPrayer(data);
            localStorage.setItem('nextPrayer', JSON.stringify(data)); // Save nextPrayer to local storage
          })
          .catch(error => console.error('Error fetching next prayer:', error));
      };
  
      // Fetch initial prayer data
      fetchPrayerData();
  
      // Set up interval to fetch data every 5 minutes (300000 milliseconds)
      const intervalId = setInterval(fetchPrayerData, 300000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <PageTransition>
    <div className="space-y-4 w-fit xl:w-3/4 2xl:w-3/4 mx-auto">
      <div className='bg-gray-200 dark:bg-gray-800 dark:text-white rounded-2xl overflow-hidden text-left xs:text-center xl:text-left 2xl:text-left mt-4 shadow-lg px-4'>
        <img src={mac_neo} alt="logo" className='h-10 mt-2 xs:mx-auto xl:mx-0 2xl:mx-0'></img>
        <h1 className='text-4xl xs:text-3xl font-bold'>Al-Salam Centre</h1>
        <h1 className="text-3xl xs:text-2xl">
        {prayerData.length > 0
          ? `${prayerData[0].month_s} ${prayerData[0].day_s}, ${prayerData[0].year_s}`
          : ''}
      </h1>
        <h1 className="text-3xl xs:text-2xl">
        {prayerData.length > 0
          ? `${prayerData[0].hijri_month} ${prayerData[0].hijri_day}, ${prayerData[0].hijri_year} AH`
          : ''}
      </h1>
      <h1 className="text-3xl xs:text-2xl">
        Next Up: <span className='font-semibold text-emerald-500'>{nextPrayer.next}</span>
      </h1>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 dark:bg-gray-800 dark:text-white">
            <tr>
              <th className="py-2 px-4 text-2xl flex">Prayer</th>
              <th className="py-2 pr-4 text-2xl text-center">Adhan</th>
              <th className="py-2 px-4 text-2xl text-right">Iqama</th>
            </tr>
          </thead>
          <tbody>
            {prayerData.map(prayer => (
              <React.Fragment key={prayer.id}>
                <tr className="bg-white dark:bg-gray-700 dark:text-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star" className="mr-3 stroke-emerald-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      <span>Fajr</span>
                    </div>
                  </td>
                  <td className={`py-2 pr-4 text-xl text-center ${nextPrayer.next === "Fajr Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.fajr_adhan} AM</td>
                  <td className={`py-2 text-xl pr-2 text-right ${nextPrayer.next === "Fajr Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.fajr_iqama} AM</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise" className='mr-3 stroke-emerald-500'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>
                      <span>Sunrise</span>
                    </div>
                  </td>
                  <td className={`py-2 pr-4 text-xl text-center ${nextPrayer.next === "Sunrise" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.sunrise} AM</td>
                  <td className="py-2 text-xl pr-2 text-center xl:text-right 2xl:text-right">---</td>
                </tr>
                <tr className="bg-white dark:bg-gray-700 dark:text-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" className='mr-3 stroke-emerald-500'><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                      <span>Dhuhr</span>
                    </div>
                  </td>
                  <td className={`py-2 pr-4 text-xl text-center ${nextPrayer.next === "Dhuhr Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.dhuhr_adhan} PM</td>
                  <td className={`py-2 text-xl pr-2 text-right ${nextPrayer.next === "Dhuhr Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.dhuhr_iqama} PM</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle" className='mr-3 stroke-emerald-500'><circle cx="12" cy="12" r="10"></circle></svg>
                      <span>Asr</span>
                    </div>
                  </td>
                  <td className={`py-2 pr-4 text-xl text-center ${nextPrayer.next === "Asr Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.asr_adhan} PM</td>
                  <td className={`py-2 text-xl pr-2 text-right ${nextPrayer.next === "Asr Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.asr_iqama} PM</td>
                </tr>
                <tr className="bg-white dark:bg-gray-700 dark:text-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset" className='mr-3 stroke-emerald-500'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>
                      <span>Maghrib</span>
                    </div>
                  </td>
                  <td className={`py-2 pr-4 text-xl text-center ${nextPrayer.next === "Maghrib Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.maghrib_adhan} PM</td>
                  <td className={`py-2 pr-2 text-xl text-right ${nextPrayer.next === "Maghrib Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.maghrib_iqama} PM</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" className='mr-3 stroke-emerald-500'><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                      <span>Isha</span>
                    </div>
                  </td>
                  <td className={`py-2 pr-4 text-xl text-center ${nextPrayer.next === "Isha Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.isha_adhan} PM</td>
                  <td className={`py-2 pr-2 text-xl text-right ${nextPrayer.next === "Isha Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{prayer.isha_iqama} PM</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden text-center text-emerald-500 font-semibold shadow-lg text-3xl xs:text-2xl xl:text-4xl 2xl:text-4xl px-4">
      <h1>
        {prayerData.length > 0
        ? <span>1<sup>st</sup> Jumuah: {prayerData[0].jumuah_1}</span> 
        : ''}
      </h1>
      <h1>
        {prayerData.length > 0
          ? <span>2<sup>nd</sup> Jumuah: {prayerData[0].jumuah_2}</span> 
          : ''}
      </h1>
      </div>
      <Link to ='/Month' >
        <div className='flex flex-col items-center'>
          <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl py-2 px-4 rounded-lg shadow-lg mt-4'>Monthly Times</button>
        </div>
      </Link>
      <Alert showAlert={showPrompt}/>
      <footer className='text-gray-500 text-xl text-center'>Beta</footer>
    </div>
    </PageTransition>
  );
}

export default Home;
