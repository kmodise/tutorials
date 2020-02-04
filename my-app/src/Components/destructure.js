import React, { Component } from 'react'

// const Destructure = ({name, age}) =>{
//     console.log(name + age);
//         return (
//             <div>name: {name} age: {age}</div>
//         )
// }

//OR YOU COULD DO THIS

// const Destructure = (props) =>{
//     const {name, age} = props;
//         return (
//             <div>name: {name} age: {age}</div>
//         )
// }

// THIS IS FOR THE CLASS COMPONENTS

class Destructure extends Component {
   
    render(){
    const {lastname, gender} = this.props
    return(<h1>lastname: {lastname} sda: {gender}</h1>)
    }
}

export default Destructure;