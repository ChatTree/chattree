'use strict';

const Message = require('./messageModel');

module.exports = {
	getMessages: function(request, response) {
    let data = request.body;
    // branch_id

		Message.sync().then(function(){
      Message.findAll({
        where: {
          branch_id: data.branch_id
        },
        order: ['created_at', 'DESC'],
      }).then(function(messages){
        response.send(messages);
      });
    });
	},
	postMessages: function(request, response) {
		Message.sync().then(function(){
			return Message.create(request.body);
		});
	}
}
