const { assert } = require("chai");
const sinon = require("sinon");
const axios = require("axios");

const  OpenWeatherApi  = require("../../services/OpenWeatherApi");

describe("OpenWeather Api Call Testing", () => {
    before( () => {
        sinon.stub(axios, "get").callsFake(function fakeFn() {
            return {
                data: {
                    coord: { lon: 88.35, lat: 22.54 },
                    weather: [],
                    base: 'stations',
                    main: {
                        temp: 33,
                        feels_like: 36.94,
                        temp_min: 33,
                        temp_max: 33,
                        pressure: 1011,
                        humidity: 59
                    },
                    visibility: 4500,
                    wind: { speed: 2.6, deg: 120 },
                    clouds: { all: 20 },
                    dt: 1584092464,
                    sys: {
                        type: 1,
                        id: 9114,
                        country: 'IN',
                        sunrise: 1584058635,
                        sunset: 1584101700
                    },
                    timezone: 19800,
                    id: 1277155,
                    name: 'Bara Bazar',
                    cod: 200
                }
            };
        });
    });

    it("testing getCurrentWeatherByCoordinates function", async () => {
        let data = await OpenWeatherApi.getCurrentWeatherByCoordinates(22.54, 88.35);
        console.log(data);
        assert.equal(data.cityName, "Bara Bazar"); //Implementation required
    });
});