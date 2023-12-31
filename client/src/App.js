import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [prayerData, setPrayerData] = useState([]);

  const fetchPrayerData = () => {
    console.log('Fetching prayer data...');
    fetch('http://localhost:3001/api/prayer')
      .then(response => response.json())
      .then(data => {
        console.log('Prayer data received:', data);
        setPrayerData(data);
      })
      .catch(error => console.error('Error fetching prayer data:', error));
  };

  useEffect(() => {
    // Fetch initial prayer data
    fetchPrayerData();

    // Set up interval to fetch data every hour (3600000 milliseconds)
    const intervalId = setInterval(fetchPrayerData, 3600000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="App">
      <h1 className="text-4xl font-bold mb-4">Prayer Times</h1>
      <h1 className="text-2xl mb-4">
        {prayerData.length > 0
          ? `${prayerData[0].hijri_month} ${prayerData[0].hijri_day}, ${prayerData[0].hijri_year} AH`
          : ''}
      </h1>
      <div className="rounded-2xl overflow-hidden shadow-lg w-fit 2xl:w-3/4 mx-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-2xl flex">Prayer</th>
              <th className="py-2 px-4 text-2xl text-center">Adhan</th>
              <th className="py-2 px-4 text-2xl text-right">Iqama</th>
            </tr>
          </thead>
          <tbody>
            {prayerData.map(prayer => (
              <React.Fragment key={prayer.id}>
                <tr className="bg-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star" className="mr-3 stroke-emerald-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      <span>Fajr</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.fajr_adhan} AM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.fajr_iqama} AM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise" className='mr-3 stroke-emerald-500'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>
                      <span>Sunrise</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.sunrise} AM</td>
                  <td className="py-2 px-4 text-xl text-center">---</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" className='mr-3 stroke-emerald-500'><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                      <span>Dhuhr</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.dhuhr_adhan} PM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.dhuhr_iqama} PM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle" className='mr-3 stroke-emerald-500'><circle cx="12" cy="12" r="10"></circle></svg>
                      <span>Asr</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.asr_adhan} PM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.asr_iqama} PM</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset" className='mr-3 stroke-emerald-500'><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>
                      <span>Maghrib</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.maghrib_adhan} PM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.maghrib_iqama} PM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" className='mr-3 stroke-emerald-500'><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                      <span>Isha</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.isha_adhan} PM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.isha_iqama} PM</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
