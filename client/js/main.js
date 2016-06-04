'use strict';
console.log('in main.js')
let React = require('react');
let ReactDOM = require('react-dom');
let Display = require('./components/chatController.js')

//var ChatWindow = require('./components/chat');
//var CalendarWindow = require('./components/calendar');

let App = React.createClass({
  render: function() {
    return (
      <div className="container">
      	<Display />
      </div> 
    );
  }
});


ReactDOM.render(<App />, document.getElementById('content'));