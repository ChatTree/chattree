'use strict';


let React = require('react');

let Message = React.createClass ({
	render: function(){
		let msg = this.props.data;
		return (
			<ul className="msg">
				<p>{msg}</p>

			</ul>
		);
	}
});

module.exports = Message;


				// <strong>{msg.author}</strong>
				// <p>{msg.message}</p>