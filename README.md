# <img src="client/public//android-chrome-192x192.png" width="40px"> 5Times
5Times is a web app that displays prayer times for masajid in Calgary

# Background
5Times is inspired by a need for a prayer app at Al-Salam Centre. I had previously developed one (which you can check [here](https://github.com/fizzlewiththesizzle/alsalamPrayerTimes)) using Flask and Bootstrap, however I received feedback about the UI and it's readability, as well as the app running slow and crashing on some devices. 

# Features
* Express.js backend
* Implementation of SQL database for prayer times rather than CSV files
* React and TailwindCSS based UI for better mobile and overall accessibility
* *NEW* Support for light and dark modes based on system preference
* *NEW* See what prayer is coming up next

## Usage
* To run the application, the following dependencies need to be installed

```bash
npm install express sqlite3 cors moment-timezone hijri
```
* Then, the backend and frontend need to be run simultaneously in separate terminal instances
  * Make sure you are in the 5Times directory in your terminal
### In Terminal 1
```bash
node server.js
```

### In Terminal 2
```bash
cd client
npm start
```

The application will be available at [localhost:3000](http://localhost:3000)
