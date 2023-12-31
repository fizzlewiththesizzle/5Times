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
  const s_year = today.getFullYear();
  const s_month = today.toLocaleString('en-US', { month: 'long' });
  const s_day = today.getDate();
  const hijri_today = hijri.convert(today, -1);
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const h_m = hijri_today.monthText
  const isDaylightSavingTime = today.getTimezoneOffset() < new Date(today.getFullYear(), 0, 1).getTimezoneOffset();
  
  if (isDaylightSavingTime) {
    //console.log("Daylight savings in effect");
    jumuah_time_1 = "01:00 PM"
    jumuah_time_2 = "02:00 PM"
  } else {
    //console.log("Daylight savings not in effect");
    jumuah_time_1 = "12:00 PM"
    jumuah_time_2 = "01:00 PM"
  }

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
      jumuah_1: jumuah_time_1,
      jumuah_2: jumuah_time_2,
      day_s: s_day,
      month_s: s_month,
      year_s: s_year,
    }));

    callback(null, result);
    console.log('Data refreshed:', moment().tz('America/Denver').format('YYYY-MM-DD HH:mm:ss'));
    console.log("Fajr    " + result[0].fajr_adhan + " " + result[0].fajr_iqama);
    console.log("Sunrise " + result[0].sunrise + "  ---");
    console.log("Dhuhr   " + result[0].dhuhr_adhan + " " + result[0].dhuhr_iqama);
    console.log("Asr     " + result[0].asr_adhan + " " + result[0].asr_iqama);
    console.log("Maghrib " + result[0].maghrib_adhan + " " + result[0].maghrib_iqama);
    console.log("Isha    " + result[0].isha_adhan + " " + result[0].isha_iqama + "\n");
    console.log("Jumuah 1: " + result[0].jumuah_1 + " | Jumuah 2: " + result[0].jumuah_2);
    console.log("Hijri Date: " + result[0].hijri_month + " " + result[0].hijri_day + ", " + result[0].hijri_year);
    console.log(result[0].month_s + " " + result[0].day_s + ", " + result[0].year_s);

    var nowDateTime = today.toISOString();
    var nowDate = nowDateTime.split('T')[0];

    // convert fajr adhan to UTC
    var fa_hms = result[0].fajr_adhan + ":00";
    var fa_utc = new Date(nowDate + 'T' + fa_hms);
    //convert sunrise to UTC
    var sr_hms = result[0].sunrise + ":00";
    var sr_utc = new Date(nowDate + 'T' + sr_hms);
    // convert dhuhr adhan to UTC
    var da_hms = result[0].dhuhr_adhan + ":00";
    var da_utc = new Date(nowDate + 'T' + da_hms);
    // convert asr adhan to UTC
    var aa_hms = result[0].asr_adhan + ":00";
    var aa_utc = new Date(nowDate + 'T' + aa_hms);
    aa_utc.setHours(aa_utc.getHours() + 12);
    // convert maghrib adhan to UTC
    var ma_hms = result[0].maghrib_adhan + ":00";
    var ma_utc = new Date(nowDate + 'T' + ma_hms);
    ma_utc.setHours(ma_utc.getHours() + 12);
    // convert isha adhan to UTC
    var ia_hms = result[0].isha_adhan + ":00";
    var ia_utc = new Date(nowDate + 'T' + ia_hms);
    ia_utc.setHours(ia_utc.getHours() + 12);

    // convert fajr iqama to UTC
    var fi_hms = result[0].fajr_iqama + ":00";
    var fi_utc = new Date(nowDate + 'T' + fi_hms);
    // convert dhuhr iqama to UTC
    var di_hms = result[0].dhuhr_iqama + ":00";
    var di_utc = new Date(nowDate + 'T' + di_hms);
    di_utc.setHours(di_utc.getHours() + 12);
    // convert asr iqama to UTC
    var ai_hms = result[0].asr_iqama + ":00";
    var ai_utc = new Date(nowDate + 'T' + ai_hms);
    ai_utc.setHours(ai_utc.getHours() + 12);
    // convert maghrib iqama to UTC
    var mi_hms = result[0].maghrib_iqama + ":00";
    var mi_utc = new Date(nowDate + 'T' + mi_hms);
    mi_utc.setHours(mi_utc.getHours() + 12);
    // convert isha iqama to UTC
    var ii_hms = result[0].isha_iqama + ":00";
    var ii_utc = new Date(nowDate + 'T' + ii_hms);
    ii_utc.setHours(ii_utc.getHours() + 12);

    if(fa_utc >= today){
      console.log("Fajr Adhan Up Next");
    }
    else if(fi_utc >= today){
      console.log("Fajr Iqama Up Next");
    }
    else if(sr_utc >= today){
      console.log("Sunrise Up Next");
    }
    else if(da_utc >= today){
      console.log("Dhuhr Adhan Up Next");
    }
    else if(di_utc >= today){
      console.log("Dhuhr Iqama Up Next");
    }
    else if(aa_utc >= today){
      console.log("Asr Adhan Up Next");
    }
    else if(ai_utc >= today){
      console.log("Asr Iqama Up Next");
    }
    else if(ma_utc >= today){
      console.log("Maghrib Adhan Up Next");
    }
    else if(mi_utc >= today){
      console.log("Maghrib Iqama Up Next");
    }
    else if(isha >= today){
      console.log("Isha Adhan Up Next");
    }
    else if(ii_utc >= today){
      console.log("Isha Iqama Up Next");
    }
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
