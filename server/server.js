'use strict';

const express = require('express');
const app = express();
const http = require('http');
const messageController = require('./messages/messageController');
const server = http.createServer(app);
const path = require('path');

app.use(express.static(path.join(__dirname + '../client/'));
app.get('/', '../client/index.html');



server.listen(3000);

module.exports = server;