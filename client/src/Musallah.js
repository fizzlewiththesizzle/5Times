import React from 'react';
import useSWR from 'swr';
import './App.css';
import './embla.css';
//import EmblaCarousel from './EmblaCarousel';
import Clock from './Clock';
import Countdown from './Countdown';
import mac_neo from './Calgary-neo.png';
import Popup from './Popup'

const fetcher = (url) => fetch(url).then((res) => res.json());
//const OPTIONS = {}
//const SLIDE_COUNT = 4
//const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const iconSize = window.innerWidth >= 3840 ? '100px' : window.innerWidth >= 1920 ? '50px' : '24px';

function Musallah() {
    const { data, error, isLoading } = useSWR('/api/prayer', fetcher, {
        onLoadingSlow: () => {
            window.location.reload()
            return <div className="dark:text-white">Loading...</div>;
        },
        loadingTimeout: 10000, // Set timeout to 10 seconds
        keepPreviousData: true,
        revalidateOnFocus: false,
        refreshInterval: 1000,
    });

    if (error) {
        console.error('Error loading data:', error);
        return <div className='dark:text-white'>Error loading data</div>;
    }

    if (isLoading || !data || !data.prayers || !data.prayers[0] || !data.nextPrayer) {
        return <div className='dark:text-white'>Loading...</div>;
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
        <React.Fragment>
            <Popup></Popup>
            <div className="grid grid-cols-2 gap-4 4xl:gap-8 mt-6 4xl:mt-12 ml-4 4xl:ml-8 mr-4 4xl:mr-8">
                {/* Left Column */}
                <div className="space-y-4 4xl:space-y-8">
                    <div className="iframe-container rounded-2xl 4xl:rounded-3xl shadow-lg">
                        <iframe
                            title="Slides"
                            src="https://docs.google.com/presentation/d/11jzRfVxNK0DLT5XIE3JelPraUhj3kTKplUm5FReRoFA/embed?start=true&loop=true&delayms=8000&rm=minimal"
                            frameBorder="0"
                            allowFullScreen={true}
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className="rounded-2xl 4xl:rounded-3xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800 text-center flex flex-col justify-center items-center">
                        <h1 className="text-7xl 4xl:text-9xl dark:text-white font-bold pt-5">Next Up:</h1>
                        <h1 className="text-7xl 4xl:text-10xl font-semibold text-emerald-500 my-auto pb-5">{nextPrayer}</h1>
                    </div>

                    <div className="pl-4 4xl:pl-8 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-2xl 4xl:rounded-3xl overflow-hidden shadow-lg">
                        <h1 className="text-6xl 4xl:text-9xl font-bold pt-4">Al-Salam Centre</h1>
                        <h1 className="text-5xl 4xl:text-8xl">
                            {month} {day}, {year}
                        </h1>
                        <h1 className="text-4.5xl 4xl:text-7.5xl">
                            {hijriMonth} {hijriDay}, {hijriYear} AH
                        </h1>
                        <img src={mac_neo} alt="logo" className="pt-4 w-3/5 h-auto pb-4" />
                    </div>
                </div>
    
                {/* Right Column */}
                <div className="space-y-4 4xl:space-y-8">
                <table className="rounded-2xl 4xl:rounded-3xl overflow-hidden shadow-lg w-full border-collapse">
                        <thead className="bg-gray-200 dark:bg-gray-800 dark:text-white">
                            <tr>
                                <th className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-3xl 2xl:text-6xl 4xl:text-9xl flex">Prayer</th>
                                <th className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-3xl 2xl:text-6xl 4xl:text-9xl text-center">Adhan</th>
                                <th className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-3xl 2xl:text-6xl 4xl:text-9xl text-right">Iqama</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white dark:bg-gray-700 dark:text-white">
                                <td className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star" className="mr-3 stroke-emerald-500 4xl:w-50 4xl:h-50"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        <span>Fajr</span>
                                    </div>
                                </td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-center ${nextPrayer === "Fajr Adhan" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{fajrAdhan} AM</td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-right ${nextPrayer === "Fajr Iqama" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{fajrIqama} AM</td>
                            </tr>
                            <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                                <td className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl">
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise" className='mr-3 stroke-emerald-500'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>
                                        <span>Sunrise</span>
                                    </div>
                                </td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-center ${nextPrayer === "Sunrise" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{sunrise} AM</td>
                                <td className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-center xl:text-right 2xl:text-right">---</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-700 dark:text-white">
                                <td className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" className='mr-3 stroke-emerald-500'><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                        <span>Dhuhr</span>
                                    </div>
                                </td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-center ${nextPrayer === "Dhuhr Adhan" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{dhuhrAdhan} PM</td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-right ${nextPrayer === "Dhuhr Iqama" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{dhuhrIqama} PM</td>
                            </tr>
                            <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                                <td className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle" className='mr-3 stroke-emerald-500'><circle cx="12" cy="12" r="10"></circle></svg>
                                        <span>Asr</span>
                                    </div>
                                </td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-center ${nextPrayer === "Asr Adhan" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{asrAdhan} PM</td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-right ${nextPrayer === "Asr Iqama" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{asrIqama} PM</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-700 dark:text-white">
                                <td className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset" className='mr-3 stroke-emerald-500'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>
                                        <span>Maghrib</span>
                                    </div>
                                </td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-center ${nextPrayer === "Maghrib Adhan" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{maghribAdhan} PM</td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-right ${nextPrayer === "Maghrib Iqama" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{maghribIqama} PM</td>
                            </tr>
                            <tr className="bg-gray-100 dark:bg-gray-800 dark:text-white">
                                <td className="py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" className='mr-3 stroke-emerald-500'><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                        <span>Isha</span>
                                    </div>
                                </td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-center ${nextPrayer === "Isha Adhan" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{ishaAdhan} PM</td>
                                <td className={`py-4 px-4 4xl:py-8 4xl:px-8 xl:text-2xl 2xl:text-5xl 4xl:text-8xl text-right ${nextPrayer === "Isha Iqama" ? 'text-emerald-500 font-bold' : ''} whitespace-nowrap`}>{ishaIqama} PM</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl 4xl:rounded-3xl overflow-hidden text-center text-emerald-500 font-semibold shadow-lg xl:text-4xl 2xl:text-6xl 4xl:text-9xl px-4 space-y-8">
                        <h1 className="pt-4">
                            <span>1<sup>st</sup> Jumuah: {jumuah1}</span>
                        </h1>
                        <h1 className="pb-4">
                            <span>2<sup>nd</sup> Jumuah: {jumuah2}</span>
                        </h1>
                    </div>
                    <div className="text-center dark:text-white">
                        <h1 className="text-6xl 4xl:text-9xl">Next Prayer In</h1>
                        <div className="clock-font font-bold xl:text-5xl 2xl:text-7xl 4xl:text-10xl text-emerald-500">
                            <Countdown></Countdown>
                        </div>
                    </div>
                    <div className="dark:text-white text-center xl:text-7xl 2xl:text-8xl 4xl:text-12xl clock-font font-bold flex justify-center items-center">
                        <Clock></Clock>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    
}
    


export default Musallah;
