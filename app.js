const dotenv = require('dotenv');
// const OpenWeatherApi = require('./services/OpenWeatherApi');
const { getWeather } = require('./controllers/weatherController');

dotenv.config();

const express = require('express')
const app = express()
const port = process.env.PORT;

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/get-weather', async (req, res) => {
    console.log(`Post request to weather app`,req.body);
    res.json(await getWeather(req.body));
});

app.listen(port, () => console.log(`Weather App listening on port ${port}!`))