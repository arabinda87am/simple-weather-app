const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()
const port = process.env.PORT;

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser);

app.post('/get-weather', (req, res) => {
    console.log(`Post request to weather app`,req.body);
    res.json({});
});

app.listen(port, () => console.log(`Weather App listening on port ${port}!`))