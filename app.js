const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => res.sendFile('views/index.html', {root: __dirname }))

app.listen(port, () => console.log(`Weather App listening on port ${port}!`))