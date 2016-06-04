'use strict';


let React = require('react');

let Message = React.createClass ({
	render: function(){
		let msg = this.props.data;
		return (
			<ul className="msg">
				<strong>{msg.author}</strong>
				<p>{msg.message}</p>
			</ul>
		);
	}
});

module.exports = Message;


