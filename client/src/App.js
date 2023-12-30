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
      <h1>Prayer Times</h1>
      <table>
        <thead>
          <tr>
            <th>Prayer</th>
            <th>Adhan</th>
            <th>Iqama</th>
          </tr>
        </thead>
        <tbody>
          {prayerData.map(prayer => (
            <React.Fragment key={prayer.id}>
              <tr>
                <td>Fajr</td>
                <td>{prayer.fajr_adhan}</td>
                <td>{prayer.fajr_iqama}</td>
              </tr>
              <tr>
                <td>Sunrise</td>
                <td>{prayer.sunrise}</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Dhuhr</td>
                <td>{prayer.dhuhr_adhan}</td>
                <td>{prayer.dhuhr_iqama}</td>
              </tr>
              <tr>
                <td>Asr</td>
                <td>{prayer.asr_adhan}</td>
                <td>{prayer.asr_iqama}</td>
              </tr>
              <tr>
                <td>Maghrib</td>
                <td>{prayer.maghrib_adhan}</td>
                <td>{prayer.maghrib_iqama}</td>
              </tr>
              <tr>
                <td>Isha</td>
                <td>{prayer.isha_adhan}</td>
                <td>{prayer.isha_iqama}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
