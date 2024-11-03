import React, { useState } from 'react';
import useSWR from 'swr';
import './App.css';
import Loading from './Loading';
import PageTransition from './PageTransition';
import BottomNavigation from './BottomNavigation';

const fetcher = (url) => fetch(url).then((res) => res.json());

// Function to get the current month as a string in 'jan', 'feb', etc.
const getCurrentMonth = () => {
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const currentMonthIndex = new Date().getMonth();
    return monthNames[currentMonthIndex];
};

function Month() {
    const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth()); // Set default month to current month
    const { data, error, isLoading } = useSWR('/api/month', fetcher);

    if (error) return <div>Error loading data</div>;
    if (isLoading || !data || !data[selectedMonth]) return <Loading />;

    const monthlyData = data[selectedMonth];

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    /*const handleButtonClick = () => {
        window.location.href = '/#/';
    };*/

    return (
        <div className="flex flex-col min-h-screen"> 
            
                <div className='flex-grow px-4 w-screen dark:text-white max-w-full w-fit md:w-screen xl:w-3/4 2xl:w-3/4 mx-auto'> 
                    <PageTransition>
                    <div className='bg-gray-200 dark:bg-gray-800 dark:text-white rounded-2xl overflow-hidden text-left xs:text-center xl:text-left 2xl:text-left mt-4 shadow-lg px-4 mb-4 pt-4 pb-4 space-y-2'>
                        <h2 className='text-4xl xs:text-2xl font-bold dark:text-white xs:text-center md:text-left xl:text-left 2xl:text-left'>Select a Month</h2>
                        <div className='relative'>
                        <select className='bg-white dark:bg-gray-700 font-semibold rounded-lg shadow-lg block w-full p-2.5 appearance-none' value={selectedMonth} onChange={handleMonthChange}>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                    </div>
                    </PageTransition>
                    <PageTransition>

                    </PageTransition>

                    <PageTransition>
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
                    </PageTransition>
                    <div className='flex flex-col items-center'>
                    </div>
                    <footer className='text-gray-500 text-xl text-center pt-2 pb-4'>Beta</footer>
                </div>
            <BottomNavigation />
        </div>

    );
}

export default Month;
