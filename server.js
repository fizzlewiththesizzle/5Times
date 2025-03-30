process.env.TZ = 'America/Denver'; // Use 'America/Denver' for MST
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

const dbPath = path.join(__dirname, 'SalamPrayerDB.sqlite3');
const db = new sqlite3.Database(dbPath);
const query = 'SELECT * FROM SalamPrayerDB_Time WHERE SalamPrayerDB_Time.Day = ? AND SalamPrayerDB_Time.Month = ?';

let cachedData = [];
var next = null;
let jan_data = [];
let feb_data = [];
let mar_data = [];
let apr_data = [];
let may_data = [];
let jun_data = [];
let jul_data = [];
let aug_data = [];
let sep_data = [];
let oct_data = [];
let nov_data = [];
let dec_data = [];

let fajr_adhan_today;
let fajr_iqama_today;
let sunrise_today;
let dhuhr_adhan_today;
let dhuhr_iqama_today;
let asr_adhan_today;
let asr_iqama_today;
let maghrib_adhan_today;
let maghrib_iqama_today;
let isha_adhan_today;
let isha_iqama_today;
let fajr_adhan_tomorrow;
let fajr_iqama_tomorrow;

let tomorrow;
let n_day;
let n_month;

function queryDatabase(callback) {
  const today = new Date();
  tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const s_year = today.getFullYear();
  const s_month = today.toLocaleString('en-US', { month: 'long' });
  const s_day = today.getDate();
  const hijri_today = hijri.convert(today, 0); // add hijri offset here
  const day = today.getDate();
  const month = today.getMonth() + 1;
  n_day = tomorrow.getDate();
  n_month = tomorrow.getMonth() + 1;
  const h_m = hijri_today.monthText;
  const isDaylightSavingTime = today.getTimezoneOffset() < new Date(today.getFullYear(), 0, 1).getTimezoneOffset();
  var dhuhr_DS_offset = 0;
  
  if (isDaylightSavingTime) {
    //console.log("Daylight savings in effect");
    jumuah_time_1 = "01:00 PM";
    jumuah_time_2 = "02:00 PM";
    dhuhr_DS_offset = 12;

  } else {
    //console.log("Daylight savings not in effect");
    jumuah_time_1 = "12:30 PM";
    jumuah_time_2 = "01:30 PM";
  }

  // convert arabic hijri months to english
  if (h_m == 'المحرّم'){
    hijri_month_en = "Muharram";
  }
  else if (h_m == 'صفر'){
    hijri_month_en = "Safar";
  }
  else if (h_m == 'ربيع الأوّل'){
    hijri_month_en = "Rabi' Al Awwal";
  }
  else if (h_m == 'ربيع الآخر'){
    hijri_month_en = "Rabi' Al-Thani";
  }
  else if (h_m == 'جمادى الأولى'){
    hijri_month_en = "Jumada Al-Awwal";
  }
  else if (h_m == 'جمادى الآخرة'){
    hijri_month_en = "Jumada Al-Thani";
  }
  else if (h_m == 'رجب'){
    hijri_month_en = "Rajab";
  }
  else if (h_m == 'شعبان'){
    hijri_month_en = "Sha'aban";
  }
  else if (h_m == 'رمضان'){
    hijri_month_en = "Ramadan";
  }
  else if (h_m == 'شوّال'){
    hijri_month_en = "Shawwal";
  }
  else if (h_m == 'ذو القعدة'){
    hijri_month_en = "Dhu Al-Qi'dah";
  }
  else if (h_m == 'ذو الحجّة'){
    hijri_month_en = "Dhu Al-Hijjah";
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
    console.log('\nData refreshed:', moment().tz('America/Denver').format('YYYY-MM-DD HH:mm:ss'));
    console.log("Fajr    " + result[0].fajr_adhan + " " + result[0].fajr_iqama);
    console.log("Sunrise " + result[0].sunrise + "  ---");
    console.log("Dhuhr   " + result[0].dhuhr_adhan + " " + result[0].dhuhr_iqama);
    console.log("Asr     " + result[0].asr_adhan + " " + result[0].asr_iqama);
    console.log("Maghrib " + result[0].maghrib_adhan + " " + result[0].maghrib_iqama);
    console.log("Isha    " + result[0].isha_adhan + " " + result[0].isha_iqama + "\n");
    console.log("Jumuah 1: " + result[0].jumuah_1 + " | Jumuah 2: " + result[0].jumuah_2);
    console.log("Hijri Date: " + result[0].hijri_month + " " + result[0].hijri_day + ", " + result[0].hijri_year);
    console.log("Greogorian Date: " + result[0].month_s + " " + result[0].day_s + ", " + result[0].year_s);

    fa = result[0].fajr_adhan;
    fajr_adhan_today = new Date();
    const [fa_hours, fa_minutes] = fa.split(':');
    fajr_adhan_today.setHours(parseInt(fa_hours, 10), parseInt(fa_minutes, 10), 0, 0);
    console.log(today);
    console.log(fajr_adhan_today);
    
    fi = result[0].fajr_iqama;
    fajr_iqama_today = new Date();
    const [fi_hours, fi_minutes] = fi.split(':');
    fajr_iqama_today.setHours(parseInt(fi_hours, 10), parseInt(fi_minutes, 10), 0, 0);
    console.log(fajr_iqama_today);

    sr = result[0].sunrise;
    sunrise_today = new Date();
    const [sr_hours, sr_minutes] = sr.split(':');
    sunrise_today.setHours(parseInt(sr_hours, 10), parseInt(sr_minutes, 10), 0, 0);
    console.log(sunrise_today);

    da = result[0].dhuhr_adhan;
    dhuhr_adhan_today = new Date();
    const [da_hours, da_minutes] = da.split(':');
    dhuhr_adhan_today.setHours(parseInt(da_hours, 10) + dhuhr_DS_offset, parseInt(da_minutes, 10), 0, 0);
    console.log(dhuhr_adhan_today);

    di = result[0].dhuhr_iqama;
    dhuhr_iqama_today = new Date();
    const [di_hours, di_minutes] = di.split(':');
    dhuhr_iqama_today.setHours(parseInt(di_hours, 10) + 12, parseInt(di_minutes, 10), 0, 0);
    console.log(dhuhr_iqama_today);

    aa = result[0].asr_adhan;
    asr_adhan_today = new Date();
    const [aa_hours, aa_minutes] = aa.split(':');
    asr_adhan_today.setHours(parseInt(aa_hours, 10) + 12, parseInt(aa_minutes, 10), 0, 0);
    console.log(asr_adhan_today);

    ai = result[0].asr_iqama;
    asr_iqama_today = new Date();
    const [ai_hours, ai_minutes] = ai.split(':');
    asr_iqama_today.setHours(parseInt(ai_hours, 10) + 12, parseInt(ai_minutes, 10), 0, 0);
    console.log(asr_iqama_today);

    ma = result[0].maghrib_adhan;
    maghrib_adhan_today = new Date();
    const [ma_hours, ma_minutes] = ma.split(':');
    maghrib_adhan_today.setHours(parseInt(ma_hours, 10) + 12, parseInt(ma_minutes, 10), 0, 0);
    console.log(maghrib_adhan_today);

    mi = result[0].maghrib_iqama;
    maghrib_iqama_today = new Date();
    const [mi_hours, mi_minutes] = mi.split(':');
    maghrib_iqama_today.setHours(parseInt(mi_hours, 10) + 12, parseInt(mi_minutes, 10), 0, 0);
    console.log(maghrib_iqama_today);

    ia = result[0].isha_adhan;
    isha_adhan_today = new Date();
    const [ia_hours, ia_minutes] = ia.split(':');
    isha_adhan_today.setHours(parseInt(ia_hours, 10) + 12, parseInt(ia_minutes, 10), 0, 0);
    console.log(isha_adhan_today);

    ii = result[0].isha_iqama;
    isha_iqama_today = new Date();
    const [ii_hours, ii_minutes] = ii.split(':');
    isha_iqama_today.setHours(parseInt(ii_hours, 10) + 12, parseInt(ii_minutes, 10), 0, 0);
    console.log(isha_iqama_today);

    if(fajr_adhan_today >= today){
      console.log("Fajr Adhan Next");
      next = "Fajr Adhan";
    }
    else if(fajr_iqama_today >= today){
      console.log("Fajr Iqama Next");
      next = "Fajr Iqama";
    }
    else if(sunrise_today >= today){
      console.log("Sunrise Next");
      next = "Sunrise";
    }
    else if(dhuhr_adhan_today >= today){
      console.log("Dhuhr Adhan Next");
      next = "Dhuhr Adhan";
    }
    else if(dhuhr_iqama_today >= today){
      console.log("Dhuhr Iqama Next");
      next = "Dhuhr Iqama";
    }
    else if(asr_adhan_today >= today){
      console.log("Asr Adhan Next");
      next = "Asr Adhan";
    }
    else if(asr_iqama_today >= today){
      console.log("Asr Iqama Next");
      next = "Asr Iqama";
    }
    else if(maghrib_adhan_today >= today){
      console.log("Maghrib Adhan Next");
      next = "Maghrib Adhan";
    }
    else if(maghrib_iqama_today >= today){
      console.log("Maghrib Iqama Next");
      next = "Maghrib Iqama";
    }
    else if(isha_adhan_today >= today){
      console.log("Isha Adhan Next");
      next = "Isha Adhan";
    }
    else if(isha_iqama_today >= today){
      console.log("Isha Iqama Next");
      next = "Isha Iqama";
    }
    else{
      console.log("Fajr Adhan Next (end of day)");
      next = "Fajr Adhan";
    }
  });
}

function fetchTomorrowFajrTimes(callback) {
  db.all(query, [n_day, n_month], (err, rows) => {
    if (err) {
      console.error('Error fetching tomorrow\'s Fajr times from the database:', err.message);
      return callback(err, null);
    }

    const resultTomorrow = rows.map(row => ({
      fajr_adhan: row.FajrAdhan,
      fajr_iqama: row.FajrIqama,
    }));

    callback(null, resultTomorrow);
    //console.log("Tomorrow Fajr Adhan: " + resultTomorrow[0].fajr_adhan);
    //console.log("Tomorrow Fajr Iqama: " + resultTomorrow[0].fajr_iqama);

    n_fa = resultTomorrow[0].fajr_adhan;
    fajr_adhan_tomorrow = new Date(tomorrow);
    const [n_fa_hours, n_fa_minutes] = n_fa.split(':');
    fajr_adhan_tomorrow.setHours(parseInt(n_fa_hours, 10), parseInt(n_fa_minutes, 10), 0, 0);
    //console.log(today);
    console.log("Tomorrow FA: " + fajr_adhan_tomorrow);
    
    n_fi = resultTomorrow[0].fajr_iqama;
    fajr_iqama_tomorrow = new Date(tomorrow);
    const [n_fi_hours, n_fi_minutes] = n_fi.split(':');
    fajr_iqama_tomorrow.setHours(parseInt(n_fi_hours, 10), parseInt(n_fi_minutes, 10), 0, 0);
    console.log("Tomorrow FI: " + fajr_iqama_tomorrow);
  });
}

function fetchDataFromDatabase() {
  queryDatabase((err, result) => {
    if (!err) {
      cachedData = result;
    }
  });

  fetchTomorrowFajrTimes((err, resultTomorrow) => {
    // Handle the result or error if needed
    if (!err) {
      // Do something with resultTomorrow
    } else {
      // Handle the error
    }
  });
}

const query_m = 'SELECT * FROM SalamPrayerDB_Time';
function queryMonth() {
  db.all(query_m, [], (err, rows) => {
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
    }));
    jan_data = result.filter(row => row.month === 1);
    feb_data = result.filter(row => row.month === 2);
    mar_data = result.filter(row => row.month === 3);
    apr_data = result.filter(row => row.month === 4);
    may_data = result.filter(row => row.month === 5);
    jun_data = result.filter(row => row.month === 6);
    jul_data = result.filter(row => row.month === 7);
    aug_data = result.filter(row => row.month === 8);
    sep_data = result.filter(row => row.month === 9);
    oct_data = result.filter(row => row.month === 10);
    nov_data = result.filter(row => row.month === 11);
    dec_data = result.filter(row => row.month === 12);
    //feb_data.forEach((row) => {
      //console.log(row.fajr_adhan);
    //});
  });
}

// Initial fetch and setup interval for periodic fetch (every hour)
fetchDataFromDatabase();
setInterval(fetchDataFromDatabase, 300000); // 5 minutes in milliseconds
queryMonth();

app.get('/api/prayer', (req, res) => {
  res.json({ prayers: cachedData, 
    nextPrayer: next });
});

app.get('/api/nextPrayer', (req, res) => {
  res.json({ next });
});

app.get('/api/month', (req, res) => {
  const monthlyData = {
    jan: jan_data,
    feb: feb_data,
    mar: mar_data,
    apr: apr_data,
    may: may_data,
    jun: jun_data,
    jul: jul_data,
    aug: aug_data,
    sep: sep_data,
    oct: oct_data,
    nov: nov_data, 
    dec: dec_data,
  };
  res.json(monthlyData);
});

app.get('/api/prayerUTC', (req, res) => {
  const utcData = {
    fajr_adhan: fajr_adhan_today,
    fajr_iqama: fajr_iqama_today,
    sunrise: sunrise_today,
    dhuhr_adhan: dhuhr_adhan_today,
    dhuhr_iqama: dhuhr_iqama_today,
    asr_adhan: asr_adhan_today,
    asr_iqama: asr_iqama_today,
    maghrib_adhan: maghrib_adhan_today, 
    maghrib_iqama: maghrib_iqama_today,
    isha_adhan: isha_adhan_today,
    isha_iqama: isha_iqama_today,
    next_fajr_adhan: fajr_adhan_tomorrow,
    next_fajr_iqama: fajr_iqama_tomorrow,
  };
  res.json(utcData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
