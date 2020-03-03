const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()
const port = process.env.PORT;

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/get-weather', (req, res) => {
    console.log(`Post request to weather app`,req.body);
    const openWeatherApi = require('./models/OpenWeatherApi');
    let openWeatherApiObj = new openWeatherApi();
    openWeatherApiObj.getCurrentWeatherByCoordinates(req.body.latitude, req.body.longitude).then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
});

app.listen(port, () => console.log(`Weather App listening on port ${port}!`))