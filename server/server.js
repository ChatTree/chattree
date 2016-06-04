'use strict';

const express = require('express');
const app = express();
const http = require('http');
const messageController = require('./messages/messageController');
const server = http.createServer(app);
const path = require('path');
const data = require('./database/controller/dbController');

app.use(express.static(path.join(__dirname + '/../client/')));
app.get('/', function(req, res){
	res.render('../client/index.html');
});
app.get('/database', function(req, res) {
	data();
})



server.listen(3000);

module.exports = server;

