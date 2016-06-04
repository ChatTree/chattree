'use strict';

const Sequelize = require('sequelize');
const db = require('../model/dbModel');



module.exports = function(){
 	db.sync({ logging: console.log, force: true })
		.then(() => console.log('back from sync'));
};
