const dotenv = require('dotenv');
dotenv.config();

const server = http.createServer((request, response) => {
    response.write("Hello Arabinda!");
    response.end();
}).listen(8081);