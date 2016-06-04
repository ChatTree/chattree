'use strict';


let React = require('react');
let Banner = React.createClass ({

	render: function(){
		let msg = this.props.data;
		return (
			<h2>{this.props.branch}</h2>
		);
	}
});

module.exports = Banner;