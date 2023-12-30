import React, { useEffect, useState } from 'react';
import './App.css';
import fajrIcon from './icons/fajr.svg';
import sunriseIcon from './icons/sunrise.svg';
import dhuhrIcon from './icons/dhuhr.svg';
import asrIcon from './icons/asr.svg';
import maghribIcon from './icons/maghrib.svg';
import ishaIcon from './icons/isha.svg';

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
      <h1 className="text-2xl">
        {prayerData.length > 0
          ? `${prayerData[0].hijri_month} ${prayerData[0].hijri_day}, ${prayerData[0].hijri_year}`
          : ''}
      </h1>
      <div className="rounded-2xl overflow-hidden shadow-lg w-3/4 mx-auto">
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
                      <img src={fajrIcon} alt="Fajr Icon" className="mr-2" />
                      <span>Fajr</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.fajr_adhan} AM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.fajr_iqama} AM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                      <img src={sunriseIcon} alt="Sunrise Icon" className="mr-2" />
                      <span>Sunrise</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.sunrise} AM</td>
                  <td className="py-2 px-4 text-xl text-right">---</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                      <img src={dhuhrIcon} alt="Dhuhr Icon" className="mr-2" />
                      <span>Dhuhr</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.dhuhr_adhan} PM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.dhuhr_iqama} PM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                      <img src={asrIcon} alt="Asr Icon" className="mr-2" />
                      <span>Asr</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.asr_adhan} PM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.asr_iqama} PM</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                      <img src={maghribIcon} alt="Maghrib Icon" className="mr-2" />
                      <span>Maghrib</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-xl text-center">{prayer.maghrib_adhan} PM</td>
                  <td className="py-2 px-4 text-xl text-right">{prayer.maghrib_iqama} PM</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4 text-xl">
                    <div className="flex items-center">
                      <img src={ishaIcon} alt="Isha Icon" className="mr-2" />
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
