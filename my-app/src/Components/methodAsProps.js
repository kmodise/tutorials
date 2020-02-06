import React, { Component } from 'react'
import Child from "./methodAsProps2";


class MethProp extends Component {
    constructor(props){
        super()
        this.state = {
            message: 'parent component'
        }
    }

    handler = (childComp) => {
        alert(`message from ${this.state.message} from ${childComp}`);
    }

    render(){
        return(
            <div>
                <Child handler={this.handler}/>
            </div>
        );
    }

}

export default MethProp