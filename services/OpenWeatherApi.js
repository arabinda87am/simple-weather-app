'use strict';
const axios = require('axios');

const openWeatherApiRootUrl = "http://api.openweathermap.org/data/2.5/";
const OWApiCurrentWeatherUrl = openWeatherApiRootUrl + "weather";

class OpenWeatherApi {
    static async getCurrentWeatherByCoordinates(latitude, longitude) {
        return axios.get(OWApiCurrentWeatherUrl, {
            params: {
                "lat": latitude,
                "lon": longitude,
                "units": "metric",
                "appid": process.env.OPEN_WEATHER_API_KEY
            }
        });
        // .then(function (response) {
        //     // console.log('getCurrentWeatherByCoordinates SUCCESS', response);     
        //     // return { "status": "SUCCESS", "data": response.data };
        //     return response;
        // })
        // .catch(function (error) {
        //     // console.log('getCurrentWeatherByCoordinates ERROR', error);
        //     // return Promise.reject({ "status": "ERROR", "data": "Api call failed. Check OpenWeatherApi.js file." });
        // });
    }
}

module.exports = OpenWeatherApi;