const dotenv = require('dotenv');

dotenv.config();

const express = require('express')
const app = express()
const port = process.env.PORT;

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const { weatherRouter } = require('./routers/weatherRouter');

app.use('/get-weather', weatherRouter);

app.listen(port, () => console.log(`Weather App listening on port ${port}!`))