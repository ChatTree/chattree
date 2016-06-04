'use strict';

const Sequelize = require('sequelize');
const db = require('../database/model/dbModel');

const Message = db.define('message', {
	_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username: {
		type: Sequelize.STRING
	},
	message: {
		type: Sequelize.TEXT
	},
	branch_id: {
		type: Sequelize.INTEGER
	},
	timeStamp: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.fn('now')
	}
});

module.exports = Message;
