'use strict';

const Sequelize = require('Sequelize');
const Sequelize = new Sequelize('chattree', 'chattree', 'ilovechattree', {
	host: 'localhost',
	dialect: 'postgres'
});

const Event = Sequelize.define('event', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	username: Sequelize.STRING,
	message: Sequelize.STRING,
	time: Sequelize.DATE,
	//branchId: 
});

module.exports = function(data) {

};