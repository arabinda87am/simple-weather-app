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

    const postData = JSON.stringify({ "latitude": position.coords.latitude, "longitude": position.coords.longitude, "accuracy": position.coords.accuracy });

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let response = JSON.parse(this.responseText);
            console.log(response);
            let weatherReportHolder = document.getElementById("weather-report");
            if(response.status == "SUCCESS"){
                weatherReportHolder.innerHTML = "Hurray! Your current location is " + response.data.name + ".<br>And here the temperature is " + response.data.main.temp + "<sup>0</sup>C.";
            }else{
                weatherReportHolder.innerHTML = "Alas! Some internal error occured. Try again.";
            }
        }
    });

    xhr.open("POST", "/weather");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(postData);
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
