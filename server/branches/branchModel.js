'use strict';

const Sequelize = require('sequelize');
const db = require('../database/model/dbModel');

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

module.exports = Branch;
