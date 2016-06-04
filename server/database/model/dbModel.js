'use strict';

const db;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://chattree:chattree@localhost/chattree');

sequelize.authenticate().then( errors => { 
	console.log('trying to authenticate with db');
	console.log(errors) 
	});

module.exports = sequelize;