'use strict';
const axios = require('axios');

const openWeatherApiRootUrl = "http://api.openweathermap.org/data/2.5/";
const OWApiCurrentWeatherUrl = openWeatherApiRootUrl + "weather";

class OpenWeatherApi {
    static async getCurrentWeatherByCoordinates(latitude, longitude) {
        try {
            let apiData = await axios.get(OWApiCurrentWeatherUrl, {
                params: {
                    "lat": latitude,
                    "lon": longitude,
                    "units": "metric",
                    "appid": process.env.OPEN_WEATHER_API_KEY
                }
            });

            // console.log(apiData);
            
            let responseData = {
                cityName: apiData.data.name,
                latitude: apiData.data.coord.lat.toFixed(2),
                longitude: apiData.data.coord.lon.toFixed(2),
                temperature: apiData.data.main.temp,
                units: "metric"
            };
            return Promise.resolve(responseData);
        } catch (error) {
            console.log(error);
            return Promise.reject("Api call error");
        }
    }
}

module.exports = OpenWeatherApi;