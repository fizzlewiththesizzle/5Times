import React from 'react';
import useSWR from 'swr';
import Alert from './Alert';
import Loading from './Loading';
import './App.css';
//import mac_neo from './Calgary-neo.png';
//import mac_neo from './Calgary-neo.webp';
import PageTransition from './PageTransition';
import BottomNavigation from './BottomNavigation';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Home() {
  const { data, error, isLoading } = useSWR('/api/prayer', fetcher, {
    onLoadingSlow: () => {
      window.location.reload();
      return <div className="dark:text-white">Loading...</div>;
    },
    loadingTimeout: 10000,
    keepPreviousData: true,
    revalidateOnFocus: false,
    refreshInterval: 1000,
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

  /*const handleButtonClick = () => {
    window.location.href = '/#/Month'; // Navigate to '/Month'
  };*/

  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

  let showPrompt = false;
  if (isIos() && !isInStandaloneMode()) {
    showPrompt = true;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow space-y-4 w-fit md:w-screen md:px-4 xl:w-3/4 2xl:w-3/4 mx-auto">
      <PageTransition>
        <div className='bg-zinc-200 dark:bg-zinc-800 dark:text-white rounded-2xl overflow-hidden text-left xs:text-center md:text-left xl:text-left 2xl:text-left mt-4 shadow-lg px-4 pt-2 pb-2'>
          <img src="Calgary.png" alt="logo" className='h-10 mt-2 xs:mx-auto md:mx-0 xl:mx-0 2xl:mx-0'></img>
          <h1 className='text-4xl xs:text-3xl font-bold '>Al-Salam Centre</h1>
          <h1 className="text-3xl xs:text-2xl">
            {month} {day}, {year}
          </h1>
          <h1 className="text-3xl xs:text-2xl">
            {hijriMonth} {hijriDay}, {hijriYear} AH
          </h1>
          <h1 className="text-3xl xs:text-2xl">
            Next Up: <span className='font-semibold text-green-700'>
              {nextPrayer}</span>
          </h1>
        </div>
        </PageTransition>
        <PageTransition>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <table className="w-full border-collapse">
            <thead className="bg-zinc-200 dark:bg-zinc-800 dark:text-white">
              <tr>
                <th className="py-2 px-4 text-2xl flex">Prayer</th>
                <th className="py-2 pr-4 text-2xl text-center">Adhan</th>
                <th className="py-2 px-4 text-2xl text-right">Iqama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-zinc-700 dark:text-white">
                <td className="py-2 px-4 text-xl">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star" className="mr-3 stroke-green-700"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>Fajr</span>
                  </div>
                </td>
                <td className={`py-2 pr-4 text-xl text-center ${nextPrayer === "Fajr Adhan" ? 'text-green-700 font-bold' : ''}`}>{fajrAdhan} AM</td>
                <td className={`py-2 text-xl pr-2 text-right ${nextPrayer === "Fajr Iqama" ? 'text-green-700 font-bold' : ''}`}>{fajrIqama} AM</td>
              </tr>
              <tr className="bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                <td className="py-2 px-4 text-xl">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise" className='mr-3 stroke-green-700'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>
                    <span>Sunrise</span>
                  </div>
                </td>
                <td className={`py-2 pr-4 text-xl text-center ${nextPrayer === "Sunrise" ? 'text-green-700 font-bold' : ''}`}>{sunrise} AM</td>
                <td className="py-2 text-xl pr-2 text-right">---</td>
              </tr>
              <tr className="bg-white dark:bg-zinc-700 dark:text-white">
                <td className="py-2 px-4 text-xl">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" className='mr-3 stroke-green-700'><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    <span>Dhuhr</span>
                  </div>
                </td>
                <td className={`py-2 pr-4 text-xl text-center ${nextPrayer === "Dhuhr Adhan" ? 'text-green-700 font-bold' : ''}`}>{dhuhrAdhan} PM</td>
                <td className={`py-2 text-xl pr-2 text-right ${nextPrayer === "Dhuhr Iqama" ? 'text-green-700 font-bold' : ''}`}>{dhuhrIqama} PM</td>
              </tr>
              <tr className="bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                <td className="py-2 px-4 text-xl">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle" className='mr-3 stroke-green-700'><circle cx="12" cy="12" r="10"></circle></svg>
                    <span>Asr</span>
                  </div>
                </td>
                <td className={`py-2 pr-4 text-xl text-center ${nextPrayer === "Asr Adhan" ? 'text-green-700 font-bold' : ''}`}>{asrAdhan} PM</td>
                <td className={`py-2 text-xl pr-2 text-right ${nextPrayer === "Asr Iqama" ? 'text-green-700 font-bold' : ''}`}>{asrIqama} PM</td>
              </tr>
              <tr className="bg-white dark:bg-zinc-700 dark:text-white">
                <td className="py-2 px-4 text-xl">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset" className='mr-3 stroke-green-700'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>
                    <span>Maghrib</span>
                  </div>
                </td>
                <td className={`py-2 pr-4 text-xl text-center ${nextPrayer === "Maghrib Adhan" ? 'text-green-700 font-bold' : ''}`}>{maghribAdhan} PM</td>
                <td className={`py-2 pr-2 text-xl text-right ${nextPrayer === "Maghrib Iqama" ? 'text-green-700 font-bold' : ''}`}>{maghribIqama} PM</td>
              </tr>
              <tr className="bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                <td className="py-2 px-4 text-xl">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" className='mr-3 stroke-green-700'><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    <span>Isha</span>
                  </div>
                </td>
                <td className={`py-2 pr-4 text-xl text-center ${nextPrayer === "Isha Adhan" ? 'text-green-700 font-bold' : ''}`}>{ishaAdhan} PM</td>
                <td className={`py-2 pr-2 text-xl text-right ${nextPrayer === "Isha Iqama" ? 'text-green-700 font-bold' : ''}`}>{ishaIqama} PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        </PageTransition>
      <PageTransition>
        <div className="bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden text-center text-green-700 font-semibold shadow-lg text-3xl xs:text-2xl xl:text-4xl 2xl:text-4xl px-4 pt-2 pb-2">
          <h1 className='pb-2'>
            <span>1<sup>st</sup> Jumuah: {jumuah1}</span>
          </h1>
          <h1>
            <span>2<sup>nd</sup> Jumuah: {jumuah2}</span>
          </h1>
        </div>
        </PageTransition>
        <Alert showAlert={showPrompt} />
        <footer className='text-zinc-500 text-xl text-center'>Beta</footer>

        
      </div>
      <BottomNavigation className="fixed-bottom-navigation"/>
    
    </div>
    
    
  );
}

export default Home;