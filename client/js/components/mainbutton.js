'use strict';


let React = require('react');

let MainButton = React.createClass ({
	render: function(){
		return(
		<div className="button">
			<button onClick={this.props.buttonton}>Main</button>
		</div>
		)
	}
});

module.exports = MainButton;