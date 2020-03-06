const express = require('express');
const weatherRouter = express();
const { getWeather } = require('../controllers/weatherController');

weatherRouter.post('/', async (req, res) => {
    console.log(`Post request to weather app`, req.body);
    res.json(await getWeather(req.body));
});

exports.weatherRouter = weatherRouter;