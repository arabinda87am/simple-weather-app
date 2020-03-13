const OpenWeatherApi = require('../services/OpenWeatherApi');
const { WeatherHistory } = require('../models/');
const { Op } = require('sequelize');
const moment = require('moment');

getWeather = async (data) => {
    if ((data.latitude !== undefined && data.latitude !== null) && (data.longitude !== undefined && data.longitude !== null)){
        try {
            const weatherHistoryData = await WeatherHistory.findOne({
                 where: {
                        latitude: data.latitude.toFixed(2),
                        longitude: data.longitude.toFixed(2),
                        createdAt: {
                            [Op.gte]: moment().subtract(5, 'minutes').toDate()
                        }
                    }
                }
            );
            // console.log(weatherHistoryData);
            let responseData;
            if (weatherHistoryData !== null) {
                //Less than 5 minute ego api called happened with same latitude & longitude
                responseData = {
                    cityName: weatherHistoryData.cityName,
                    latitude: weatherHistoryData.latitude,
                    longitude: weatherHistoryData.longitude,
                    temperature: weatherHistoryData.temperature,
                    units: weatherHistoryData.units
                };
                
            }else{
                //Fetching fresh data from API calling
                let apiData = await OpenWeatherApi.getCurrentWeatherByCoordinates(data.latitude, data.longitude);
                responseData = {
                    cityName: apiData.data.name,
                    latitude: apiData.data.coord.lat,
                    longitude: apiData.data.coord.lon,
                    temperature: apiData.data.main.temp,
                    units: "metric"
                };
                // console.log(responseData);
                WeatherHistory.create(responseData).then(res => console.log('Database Insert Successful. Insert id: ' + res.id))
                    .catch(error => console.log('Database Insert Error', error));
            }
            
            return { "status": "SUCCESS", "data": responseData };
        } catch (error){
            console.log(error);
            return { "status": "ERROR", "data": "Api call failed. Check OpenWeatherApi.js file." };
        }
    }else{
        return { "status": "ERROR", "data": "Latitude or Longitude is not valid." };
    }
}

exports.getWeather = getWeather;