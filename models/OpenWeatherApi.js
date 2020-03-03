'use strict';

const openWeatherApiRootUrl = "http//api.openweathermap.org/data/2.5/";
const OWApiCurrentWeatherUrl = openWeatherApiRootUrl + "weather";
const axios = require('axios');

module.exports = class OpenWeatherApi {
    getCurrentWeatherByCoordinates(latitude, longitude) {
        return axios.get(OWApiCurrentWeatherUrl, {
            params: {
                "lat": latitude,
                "lon": longitude,
                "appid": process.env.OPEN_WEATHER_API_KEY
            }
        })
        .then(function (response) {
            console.log('getCurrentWeatherByCoordinates SUCCESS', response.data);     
            return { "status": "SUCCESS", "data": response.data };
        })
        .catch(function (error) {
            console.log('getCurrentWeatherByCoordinates ERROR', error);
            return Promise.reject({ "status": "ERROR", "data": "Api call failed. Check OpenWeatherApi.js file." });
        });
    }
}