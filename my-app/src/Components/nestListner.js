import React, {Component} from 'react'


class Nest extends Component {
    constructor(){
        super();
        this.state = {
            mes: "na"
        }
    }

    handle = () => {
        this.setState({
            mes: "nice"
        }
        // console.log(this)
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.mes}</h1>
                <button onClick={this.handle}>click</button>
            </div>
        );
    }
}

export default Nest;