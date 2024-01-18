import React, { useState } from 'react';
import useSWR from 'swr';
import './App.css';
import mac_neo from './Calgary-neo.png';
import PageTransition from './PageTransition';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Month() {
    const [selectedMonth, setSelectedMonth] = useState('jan'); // Initialize selectedMonth as a local state
    const { data, error, isLoading } = useSWR('/api/month', fetcher);

    if (error) return <div>Error loading data</div>;
    if (isLoading || !data || !data[selectedMonth]) return <div className='dark:text-white'>Loading...</div>;

    const monthlyData = data[selectedMonth];

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value); // Update the selectedMonth state using useState
    };

    const handleButtonClick = () => {
        window.location.href = '/#/'; // Navigate to '/#/'
    };

    return (
        <PageTransition>
            <div className='px-4 w-screen dark:text-white'>
                <div className='bg-gray-200 dark:bg-gray-800 dark:text-white rounded-2xl overflow-hidden text-left xs:text-center xl:text-left 2xl:text-left mt-4 shadow-lg px-4 mb-4'>
                    <img src={mac_neo} alt="logo" className='h-10 mt-2 xs:mx-auto xl:mx-0 2xl:mx-0'></img>
                    <h1 className='text-4xl xs:text-3xl font-bold'>Al-Salam Centre</h1>
                </div>
                <div className='relative'>
                    <select className='bg-gray-200 dark:bg-gray-800 font-semibold rounded-lg shadow-lg block w-full p-2.5 appearance-none' value={selectedMonth} onChange={handleMonthChange}>
                        <option value="jan">January</option>
                        <option value="feb">February</option>
                        <option value="mar">March</option>
                        <option value="apr">April</option>
                        <option value="may">May</option>
                        <option value="jun">June</option>
                        <option value="jul">July</option>
                        <option value="aug">August</option>
                        <option value="sep">September</option>
                        <option value="oct">October</option>
                        <option value="nov">November</option>
                        <option value="dec">December</option>
                    </select>
                    <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>

                <table className='text-center xs:text-sm w-full border-separate border-spacing-y-4'>
                    <thead className='bg-gray-200 dark:bg-gray-800'>
                        <tr>
                            <th className='py-3 pl-4 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>Day</th>
                            <th className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>Fajr</th>
                            <th className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>Sunrise</th>
                            <th className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>Dhuhr</th>
                            <th className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>Asr</th>
                            <th className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>Maghrib</th>
                            <th className='py-3 pr-2 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>Isha</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white dark:bg-gray-700'>
                        {monthlyData.map((item, index) => (
                            <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-200 dark:bg-gray-800'}>
                                <td className='py-3 pl-2 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>{item.day}</td>
                                <td className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>{item.fajr_adhan}</td>
                                <td className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>{item.sunrise}</td>
                                <td className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>{item.dhuhr_adhan}</td>
                                <td className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>{item.asr_adhan}</td>
                                <td className='py-3 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>{item.maghrib_adhan}</td>
                                <td className='py-3 pr-2 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>{item.isha_adhan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex flex-col items-center'>
                    <button type="button" onClick={handleButtonClick} className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl py-2 px-4 rounded-lg shadow-lg'>Daily Times</button>
                </div>
                <footer className='text-gray-500 text-xl text-center pt-2 pb-4'>Beta</footer>
            </div>
        </PageTransition>
    );
}

export default Month;
