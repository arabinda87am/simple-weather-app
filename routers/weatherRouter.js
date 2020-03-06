const express = require('express');
const weatherRouter = express();

weatherRouter.post('/', async (req, res) => {
    console.log(`Post request to weather app`, req.body);
    res.json(await getWeather(req.body));
});

exports.weatherRouter = weatherRouter;