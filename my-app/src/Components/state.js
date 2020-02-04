import React, { Component } from 'react';

class Message extends Component {
     constructor (){
         super();
         this.state = {
            message: "please sub to my channel"
         }
     }

     newMessage = () => {
         this.setState(
             {message: "you're too kind"}
         );
     }

     render(){
         return (
             <div>
                 <h1>{this.state.message}</h1>
                 <button onClick = {() => this.newMessage()}>subscribe</button>
             </div>
         );
     }
}

export default Message;