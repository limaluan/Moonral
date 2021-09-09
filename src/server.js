const express = require('express');
const server = express();
const path = require('path');
const router = require('./router');

server.use(express.urlencoded());

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.static("public"));
server.use(router);

server.listen(3001, (err) => {
    if (!err) console.log(`Server running on port: 3001`);
})
