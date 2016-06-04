'use strict';

let React = require('react');
let Message = require('./message');
//let ChatForm = require('./chatForm');


let Display = React.createClass({
  getInitialState: function() {
    return { 
      messages: [] 
    }
  },

  getData: function(){
    // let that = this;
    // $.get(this.props.url).done(function(data){
    //   that.dataParsing(data);
    // });
    let data = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(' ')

    this.dataParsing(data)
  },

  dataParsing: function(data){
    let messageList = data.slice(-20);
    this.setState({messages: messageList})
  },


  componentWillMount: function(){
    this.getData();
  },

  clickHandler:function(){
    //to be determined
  },

  render: function() {
    let messageNodes = this.state.messages.map((message, index)=>{
      return <Message data={message} key={index} onClick = {this.clickHandler} />
    });

    return (
      <ul className="chatList">
        {messageNodes}
      </ul>
    );
  }
});

module.exports = Display;