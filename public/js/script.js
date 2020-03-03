$(document).ready(function(){
    console.log("script.js loaded successfully");
    // check whether browser supports geolocation api
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positionSuccess, positionError, { enableHighAccuracy: true });
    } else {
        let weatherReportHolder = document.getElementById("weather-report");
        weatherReportHolder.innerHTML = "Your browser is not supported geolocation!";
    }
});

function positionSuccess(position) {
    console.log(position);
    
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var acr = position.coords.accuracy;
}

// handle geolocation api errors
function positionError(error) {
    var errors = {
        1: "Authorization fails. You revoked the location access permission.", // permission denied
        2: "Can't detect your location now. Try again later.", //position unavailable
        3: "Connection timeout. Try again later." // timeout
    };

    let weatherReportHolder = document.getElementById("weather-report");
    weatherReportHolder.innerHTML = "Error: " + errors[error.code];
}
