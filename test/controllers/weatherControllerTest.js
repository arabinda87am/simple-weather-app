const { assert } = require("chai");
const { getWeather } = require("../../controllers/weatherController");

describe("weather controller Testing", () => {
    it("testing getWeather function", async () => {
        const weatherData = await getWeather({
                                "latitude": "22.5415116",
                                "longitude": "88.3493653"
                            });
        assert.oneOf(weatherData.status, ["SUCCESS","ERROR"]);
    });
});