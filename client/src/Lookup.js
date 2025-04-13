import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import PageTransition from './PageTransition';
import BottomNavigation from './BottomNavigation';
import Loading from './Loading';

// Fetcher function to get data from the API
const fetcher = (url) => fetch(url).then((res) => res.json());

const Lookup = () => {
    const { data, error } = useSWR('/api/month', fetcher);
    const [selectedMonth, setSelectedMonth] = useState('1'); // Default to January
    const [selectedDay, setSelectedDay] = useState('1'); // No default day selected
    const [selectedPrayerTimes, setSelectedPrayerTimes] = useState(null);
    const currentYear = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Denver" })).getFullYear(); // Get the current year in Mountain Time

    useEffect(() => {
        if (data) {
            // Reset the prayer times whenever the data changes
            setSelectedPrayerTimes(null);
        }
    }, [data]);

    const handleMonthChange = (e) => {
        const newMonth = e.target.value;
        const daysInNewMonth = new Date(currentYear, parseInt(newMonth, 10), 0).getDate();
    
        // If the selected day exceeds the days in the new month, reset it
        if (selectedDay > daysInNewMonth) {
            setSelectedDay('1'); // Reset day if it's not valid for the new month
        }
        
        setSelectedMonth(newMonth);
    };
    

    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the date in MM/DD/YYYY format
        const formattedDate = `${selectedMonth}/${selectedDay}/${currentYear}`;
        console.log("Selected date for search:", formattedDate);

        // Find the prayer times for the selected date
        let found = false; // To track if the date is found
        for (const month in data) {
            const prayerTimeEntry = data[month].find(item => item.date === formattedDate);
            console.log(`Searching in month: ${month}, Found entry:`, prayerTimeEntry);

            if (prayerTimeEntry) {
                setSelectedPrayerTimes(prayerTimeEntry);
                console.log("Found prayer times:", prayerTimeEntry);
                found = true; // Mark as found
                break; // Stop searching once found
            }
        }

        if (!found) {
            console.log("No entry found for date:", formattedDate);
            setSelectedPrayerTimes(null); // Reset if no entry found
        }
    };

    if (error) {
        console.error("Error loading data:", error);
        return <div>Error loading data</div>;
    }
    if (!data) {
        console.log("Loading data...");
        return <Loading />;
    }

    // Generate days based on selected month
    const generateDays = () => {
        const monthIndex = parseInt(selectedMonth, 10);
        const daysInMonth = new Date(currentYear, monthIndex, 0).getDate();

        return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    };

    return (
        <div className="flex flex-col min-h-screen">
        <div className="flex-grow space-y-4 w-full md:w-screen md:px-4 xl:w-3/4 2xl:w-3/4 mx-auto px-4">
        <PageTransition>
            <div className='bg-zinc-200 dark:bg-zinc-800 dark:text-white rounded-2xl overflow-hidden text-left xs:text-center md:text-left xl:text-left 2xl:text-left mt-4 shadow-lg px-8 pt-4 pb-4 space-y-2'>
                <h2 className='text-4xl xs:text-2xl font-bold dark:text-white xs:text-center md:text-left xl:text-left 2xl:text-left'>Select a Date</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-4 justify-center"> {/* Flex container for side-by-side layout */}
                        <div className='relative w-2/3'>
                        <select className="dark:text-white xs:text-xl bg-white dark:bg-zinc-700 font-semibold rounded-lg shadow-lg block p-2.5 w-full appearance-none" value={selectedMonth} onChange={handleMonthChange}>
                            {[...Array(12).keys()].map(i => (
                                <option key={i} value={i + 1}>
                                    {new Date(0, i).toLocaleString('default', { month: 'long' })}
                                </option>
                            ))}
                        </select>
                        <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                        </div>
                        
                        <div className='relative w-1/3'>
                        <select className="dark:text-white text-xl bg-white dark:bg-zinc-700 font-semibold rounded-lg shadow-lg block p-2.5 w-full appearance-none" value={selectedDay} onChange={handleDayChange} disabled={!selectedMonth}>
                            {generateDays().map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                        </div>
                        
                    </div>

                    <button className='bg-green-700 hover:bg-green-800 text-white font-bold text-xl py-2 px-4 rounded-lg shadow-lg mt-4' type="submit">Submit</button>
                </form>
            </div>
            </PageTransition>

            {selectedPrayerTimes && (
                <PageTransition>
                <div className="space-y-4">
                    <h3 className='text-4xl xs:text-2xl font-bold dark:text-white xs:text-center md:text-left xl:text-left 2xl:text-left'>Prayer Times for {selectedPrayerTimes.date}</h3>
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
                                    <td className="py-2 pr-4 text-xl text-center">{selectedPrayerTimes.fajr_adhan} AM</td>
                                    <td className="py-2 text-xl pr-2 text-right">{selectedPrayerTimes.fajr_iqama} AM</td>
                                </tr>
                                <tr className="bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                                    <td className="py-2 px-4 text-xl">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise" className='mr-3 stroke-green-700'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>
                                            <span>Sunrise</span>
                                        </div>
                                    </td>
                                    <td className="py-2 pr-4 text-xl text-center">{selectedPrayerTimes.sunrise} AM</td>
                                    <td className="py-2 text-xl pr-2 text-center xl:text-right 2xl:text-right">---</td>
                                </tr>
                                <tr className="bg-white dark:bg-zinc-700 dark:text-white">
                                    <td className="py-2 px-4 text-xl">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" className='mr-3 stroke-green-700'><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                            <span>Dhuhr</span>
                                        </div>
                                    </td>
                                    <td className="py-2 pr-4 text-xl text-center">{selectedPrayerTimes.dhuhr_adhan} PM</td>
                                    <td className="py-2 text-xl pr-2 text-right">{selectedPrayerTimes.dhuhr_iqama} PM</td>
                                </tr>
                                <tr className="bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                                    <td className="py-2 px-4 text-xl">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle" className='mr-3 stroke-green-700'><circle cx="12" cy="12" r="10"></circle></svg>
                                            <span>Asr</span>
                                        </div>
                                    </td>
                                    <td className="py-2 pr-4 text-xl text-center">{selectedPrayerTimes.asr_adhan} PM</td>
                                    <td className="py-2 text-xl pr-2 text-right">{selectedPrayerTimes.asr_iqama} PM</td>
                                </tr>
                                <tr className="bg-white dark:bg-zinc-700 dark:text-white">
                                    <td className="py-2 px-4 text-xl">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset" className='mr-3 stroke-green-700'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>
                                            <span>Maghrib</span>
                                        </div>
                                    </td>
                                    <td className="py-2 pr-4 text-xl text-center">{selectedPrayerTimes.maghrib_adhan} PM</td>
                                    <td className="py-2 pr-2 text-xl text-right">{selectedPrayerTimes.maghrib_iqama} PM</td>
                                </tr>
                                <tr className="bg-zinc-200 dark:bg-zinc-800 dark:text-white">
                                    <td className="py-2 px-4 text-xl">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" className='mr-3 stroke-green-700'><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                            <span>Isha</span>
                                        </div>
                                    </td>
                                    <td className="py-2 pr-4 text-xl text-center">{selectedPrayerTimes.isha_adhan} PM</td>
                                    <td className="py-2 pr-2 text-xl text-right">{selectedPrayerTimes.isha_iqama} PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                </PageTransition>
                
            )}
            <footer className='text-zinc-500 text-xl text-center'>Beta</footer>
        </div>
        <BottomNavigation />
        </div>
    );
};

export default Lookup;
