import React from 'react';
import useSWR from 'swr';
import Loading from './Loading';
import './App.css';
import mac_neo from './Calgary-neo.png';
import qr_code from './qr-code.png';
import Clock from './Clock';
import Countdown from './Countdown';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Vertical() {
  const { data, error, isLoading } = useSWR('/api/prayer', fetcher, {
    onLoadingSlow: () => {
      window.location.reload();
      return <div className="dark:text-white">Loading...</div>;
    },
    loadingTimeout: 10000,
    keepPreviousData: true,
    revalidateOnFocus: false,
    refreshInterval: 900000,
  });

  if (error) {
    console.error('Error loading data:', error);
    return <div className='dark:text-white'>Error loading data</div>;
  }

  if (isLoading || !data || !data.prayers || !data.prayers[0] || !data.nextPrayer) {
    return <Loading></Loading>;
  }

  const prayerData = data.prayers[0]; // Declare a variable to avoid repetition

  const {
    month_s: month,
    day,
    year_s: year,
    hijri_month: hijriMonth,
    hijri_day: hijriDay,
    hijri_year: hijriYear,
    fajr_adhan: fajrAdhan,
    fajr_iqama: fajrIqama,
    sunrise,
    dhuhr_adhan: dhuhrAdhan,
    dhuhr_iqama: dhuhrIqama,
    asr_adhan: asrAdhan,
    asr_iqama: asrIqama,
    maghrib_adhan: maghribAdhan,
    maghrib_iqama: maghribIqama,
    isha_adhan: ishaAdhan,
    isha_iqama: ishaIqama,
    jumuah_1: jumuah1,
    jumuah_2: jumuah2,
  } = prayerData;

  const nextPrayer = data.nextPrayer; // Accessing nextPrayer from the data object

  return (
    <div className="space-y-4 w-screen xl:w-3/4 2xl:w-3/4 mx-auto px-8">
      <div className='bg-gray-200 dark:bg-gray-800 dark:text-white rounded-3xl overflow-hidden text-left mt-4 py-4 shadow-lg px-4 space-y-1'>
        <img src={mac_neo} alt="logo" className='h-24 mx-0 2xl:mx-0'></img>
        <h1 className='text-6xl font-bold'>Al-Salam Centre</h1>
        <h1 className="text-5xl">
          {month} {day}, {year}
        </h1>
        <h1 className="text-5xl">
          {hijriMonth} {hijriDay}, {hijriYear} AH
        </h1>
        <h1 className="text-5xl">
          Next Up: <span className='font-semibold text-emerald-500'>
            {nextPrayer}</span>
        </h1>
      </div>
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 dark:bg-gray-800 dark:text-white">
            <tr>
              <th className="py-4 px-4 text-6xl flex">Prayer</th>
              <th className="py-4 pr-4 text-6xl text-center">Adhan</th>
              <th className="py-4 px-4 text-6xl text-right">Iqama</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-700 dark:text-white">
              <td className="py-4 px-4 text-5xl">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star" className="mr-3 stroke-emerald-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span>Fajr</span>
                </div>
              </td>
              <td className={`py-4 pr-4 text-5xl text-center ${nextPrayer === "Fajr Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{fajrAdhan} AM</td>
              <td className={`py-4 text-5xl pr-4 text-right ${nextPrayer === "Fajr Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{fajrIqama} AM</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
              <td className="py-4 px-4 text-5xl">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise" className='mr-3 stroke-emerald-500'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>
                  <span>Sunrise</span>
                </div>
              </td>
              <td className={`py-4 pr-4 text-5xl text-center ${nextPrayer === "Sunrise" ? 'text-emerald-500 font-bold' : ''}`}>{sunrise} AM</td>
              <td className="py-4 text-5xl pr-4 text-right">---</td>
            </tr>
            <tr className="bg-white dark:bg-gray-700 dark:text-white">
              <td className="py-4 px-4 text-5xl">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" className='mr-3 stroke-emerald-500'><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                  <span>Dhuhr</span>
                </div>
              </td>
              <td className={`py-4 pr-4 text-5xl text-center ${nextPrayer === "Dhuhr Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{dhuhrAdhan} PM</td>
              <td className={`py-4 text-5xl pr-4 text-right ${nextPrayer === "Dhuhr Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{dhuhrIqama} PM</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
              <td className="py-4 px-4 text-5xl">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle" className='mr-3 stroke-emerald-500'><circle cx="12" cy="12" r="10"></circle></svg>
                  <span>Asr</span>
                </div>
              </td>
              <td className={`py-4 pr-4 text-5xl text-center ${nextPrayer === "Asr Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{asrAdhan} PM</td>
              <td className={`py-4 text-5xl pr-4 text-right ${nextPrayer === "Asr Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{asrIqama} PM</td>
            </tr>
            <tr className="bg-white dark:bg-gray-700 dark:text-white">
              <td className="py-4 px-4 text-5xl">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset" className='mr-3 stroke-emerald-500'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>
                  <span>Maghrib</span>
                </div>
              </td>
              <td className={`py-4 pr-4 text-5xl text-center ${nextPrayer === "Maghrib Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{maghribAdhan} PM</td>
              <td className={`py-4 pr-4 text-5xl text-right ${nextPrayer === "Maghrib Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{maghribIqama} PM</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
              <td className="py-4 px-4 text-5xl">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" className='mr-3 stroke-emerald-500'><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  <span>Isha</span>
                </div>
              </td>
              <td className={`py-4 pr-4 text-5xl text-center ${nextPrayer === "Isha Adhan" ? 'text-emerald-500 font-bold' : ''}`}>{ishaAdhan} PM</td>
              <td className={`py-4 pr-4 text-5xl text-right ${nextPrayer === "Isha Iqama" ? 'text-emerald-500 font-bold' : ''}`}>{ishaIqama} PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden text-center text-emerald-500 font-semibold shadow-lg text-6xl py-2 space-y-4 pt-4 pb-4">
        <h1 className="mb-8">
          <span>1<sup>st</sup> Jumuah: {jumuah1}</span>
        </h1>
        <h1>
          <span>2<sup>nd</sup> Jumuah: {jumuah2}</span>
        </h1>
      </div>
      <div className='dark:text-white text-center flex flex-col justify-center items-center py-2'>
        <div className='text-9xl font-bold clock-font'>
          <Clock></Clock>
        </div>

        <h1 className='text-4xl'>Next Prayer In</h1>
        <div className='text-7xl clock-font text-emerald-500'><Countdown></Countdown></div>
      </div>

      <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl dark:text-white text-left flex py-8 shadow-lg">
        <img src={qr_code} alt="qr code" className='h-80 px-8'></img>
        <div className="flex-1">
          <h1 className='text-5xl'>Access the salah times from your mobile device</h1>
          <h1 className='text-6xl font-bold text-emerald-500 mt-2'>5times.vercel.app</h1>
        </div>
      </div>
    </div>
  );
}

export default Vertical;