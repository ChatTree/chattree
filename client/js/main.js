'use strict';

let React = require('react');
let ReactDOM = require('react-dom');


var App = React.createClass({
  getInitialState: function(){
  	return null;
  },

	render: function() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
      </div>
    );
  },
})

ReactDOM.render(<App />, document.getElementById('content'));