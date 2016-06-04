'use strict';

const Branch = require('./branchModel');

module.exports = {
	getBranch: function(request, response) {
		
	},
	postBranch: function(request, response) {
		Branch.sync().then(function(){
			return Branch.create(request.body);
		});
	}
}
