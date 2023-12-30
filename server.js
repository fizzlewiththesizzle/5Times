const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const moment = require('moment-timezone');
var hijri = require('hijri');


const app = express();
const PORT = process.env.PORT || 3001;

// Use the cors middleware
app.use(cors());

const db = new sqlite3.Database('SalamPrayerDB.sqlite3');
const query = 'SELECT * FROM SalamPrayerDB_Time WHERE SalamPrayerDB_Time.Day = ? AND SalamPrayerDB_Time.Month = ?';

let cachedData = [];

function queryDatabase(callback) {
  const today = new Date();
  const hijri_today = hijri.convert(today, -1);
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const h_m = hijri_today.monthText

  // convert arabic hijri months to english
  if (h_m == 'المحرّم'){
    hijri_month_en = "Muharram";
  }
  else if (h_m == 'صفر'){
    hijri_month_en = "Safar";
  }
  else if (h_m == 'ربيع الأوّل'){
    hijri_month_en = "Rabi ul Awal";
  }
  else if (h_m == 'ربيع الآخر'){
    hijri_month_en = "Rabi Al-Akhar";
  }
  else if (h_m == 'جمادى الأولى'){
    hijri_month_en = "Jumada Al-Awwal";
  }
  else if (h_m == 'جمادى الآخرة'){
    hijri_month_en = "Jumada Al-Akhirah";
  }
  else if (h_m == 'رجب'){
    hijri_month_en = "Rajab";
  }
  else if (h_m == 'شعبان'){
    hijri_month_en = "Shaban";
  }
  else if (h_m == 'رمضان'){
    hijri_month_en = "Ramadan";
  }
  else if (h_m == 'شوّال'){
    hijri_month_en = "Shawwal";
  }
  else if (h_m == 'ذو القعدة'){
    hijri_month_en = "Dhul Qadah";
  }
  else if (h_m == 'ذو الحجّة'){
    hijri_month_en = "Dhul Hijjah";
  }


  db.all(query, [day, month], (err, rows) => {
    if (err) {
      console.error('Error fetching data from the database:', err.message);
      return callback(err, null);
    }

    const result = rows.map(row => ({
      id: row.Id,
      date: row.Date,
      day: row.Day,
      month: row.Month,
      fajr_adhan: row.FajrAdhan,
      fajr_iqama: row.FajrIqama,
      sunrise: row.Sunrise,
      dhuhr_adhan: row.DhuhrAdhan,
      dhuhr_iqama: row.DhuhrIqama,
      asr_adhan: row.AsrAdhan,
      asr_iqama: row.AsrIqama,
      maghrib_adhan: row.MaghribAdhan,
      maghrib_iqama: row.MaghribIqama,
      isha_adhan: row.IshaAdhan,
      isha_iqama: row.IshaIqama,
      hijri_day: hijri_today.dayOfMonth,
      hijri_year: hijri_today.year,
      hijri_month: hijri_month_en,
    }));

    callback(null, result);
    console.log('Data refreshed:', moment().tz('America/Denver').format('YYYY-MM-DD HH:mm:ss'));
    console.log("Fajr    " + result[0].fajr_adhan + " " + result[0].fajr_iqama);
    console.log("Sunrise " + result[0].sunrise + "  ---");
    console.log("Dhuhr   " + result[0].dhuhr_adhan + " " + result[0].dhuhr_iqama);
    console.log("Asr     " + result[0].asr_adhan + " " + result[0].asr_iqama);
    console.log("Maghrib " + result[0].maghrib_adhan + " " + result[0].maghrib_iqama);
    console.log("Isha    " + result[0].isha_adhan + " " + result[0].isha_iqama + "\n");
    console.log("Hijri Date: " + result[0].hijri_month + " " + result[0].hijri_day + ", " + result[0].hijri_year);
  });
}

function fetchDataFromDatabase() {
  queryDatabase((err, result) => {
    if (!err) {
      cachedData = result;
    }
  });
}

// Initial fetch and setup interval for periodic fetch (every hour)
fetchDataFromDatabase();
setInterval(fetchDataFromDatabase, 3600000); // 1 hour in milliseconds

app.get('/api/prayer', (req, res) => {
  res.json(cachedData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
