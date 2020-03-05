const OpenWeatherApi = require('../services/OpenWeatherApi');

getWeather = async (data) => {
    if ((data.latitude !== undefined && data.latitude !== null) && (data.longitude !== undefined && data.longitude !== null)){
        try {
            let apiData = await OpenWeatherApi.getCurrentWeatherByCoordinates(data.latitude, data.longitude);
            // console.log(apiData.data);
            
            return { "status": "SUCCESS", "data": apiData.data };
        } catch (error){
            return { "status": "ERROR", "data": "Api call failed. Check OpenWeatherApi.js file." };
        }
    }else{
        return { "status": "ERROR", "data": "Latitude or Longitude is not valid." };
    }
}

exports.getWeather = getWeather;