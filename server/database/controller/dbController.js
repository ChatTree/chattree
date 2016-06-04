'use strict';

const Sequelize = require('sequelize');
const db = require('../model/dbModel');

const Branch = db.define('branch', {
	_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	messageId: {
		type: Sequelize.INTEGER
	},
	parentId: {
		type: Sequelize.INTEGER
	}
});

module.exports = function(){
 	db.sync({ logging: console.log, force: true })
		.then(() => console.log('back from sync'));
};
