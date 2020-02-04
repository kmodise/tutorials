import React, {Component} from 'react'

//FOR FUNCTION COMPONENTS

// const Listen = () => {
    
//    const dothis = () => {
//        console.log('click');
//    }


//     return(
//         <div>
//             <button onClick = {dothis}>click</button>
//         </div>
        
//     );
// }

//FOR CLASS COMPONENTS

class Listen extends Component {

    dothis = () => {
        console.log('clicked');
    }

    render(){

        return(
            <div>
                <button onClick = {this.dothis}>click</button>
            </div>
        );
    }
}

export default Listen