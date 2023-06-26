import express from 'express';
//import cors from 'cors';  
import path  from 'path';
const __dirname = path.resolve();

const app = express();
//app.use(cors());

app.get('/profile', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('this is profile ' + new Date());
})

app.get('/weather/:cityName', (req, res) => {
  console.log('this is profile!', new Date());
  let weatherData = {
    karachi: {
        city: 'karachi',
        temp: 33,
        high: 34,
        low: 29
    },
    lahore: {
      city: 'lahore',
      temp: 29,
      high: 31,
      low: 26
  },
  islamabad: {
    city: 'islamabad',
    temp: 30,
    high: 31,
    low: 25
},
peshawar: {
    city: 'peshawar',
    temp: 30,
    high: 32,
    low: 26
},
quetta: {
    city: 'quetta',
    temp: 30,
   high: 33,
    low: 22
},
}

  let userInputCityName = req.params.cityName.toLowerCase();
  let weatherDataToSend = weatherData[userInputCityName];

    if (weatherDataToSend) {
        res.send(weatherDataToSend);
    } else {
        res.status(404)
            .send(`weather data is not available for ${req.params.cityName}`);
    }
})

app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})