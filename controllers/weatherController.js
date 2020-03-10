const OpenWeatherApi = require('../services/OpenWeatherApi');

getWeather = async (data) => {
    if ((data.latitude !== undefined && data.latitude !== null) && (data.longitude !== undefined && data.longitude !== null)){
        try {
            let apiData = await OpenWeatherApi.getCurrentWeatherByCoordinates(data.latitude, data.longitude);
            let responseData = apiData.data;
            // console.log(responseData);
            let { WeatherHistory } = require('../models/WeatherHistory');
            WeatherHistory.then(() => {
                    WeatherHistory.create({ 
                    cityName: responseData.name, 
                    latitude: responseData.coord.lat,
                    longitude: responseData.coord.lon,
                    temperature: responseData.main.temp,
                    units: "metric"
                }).then(res => console.log('Database Insert Successful ' + res.id))
                .catch(error => console.log('Database Insert Error', error))
            });
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