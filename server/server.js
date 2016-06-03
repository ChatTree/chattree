let React = require('react');
let ReactDOM = require('react-dom');

var App = React.createClass({
	getInitialState: function(){},
	render: function(){
		return(
		<div className="container">
			<h1>Hello World</h1>
		</div>
		);
	},
})

ReactDOM.render(<App />, document.getElementById('content'));