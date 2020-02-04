import React, {Component} from "react";

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: "Velkom mah muman"
        }
    }

    messageChange() {
        this.setStage({message: 'thanks'})
      }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                {this.props.children}
                
            </div>
            
            );
    };
}

export default Message;