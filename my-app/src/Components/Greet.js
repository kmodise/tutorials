import React from 'react';

// function Greet() {
//     return(<h1>dady is home</h1>);
// }

const Greet = ( props ) => {
   console.log(props);
return(
   <div>
      <h5>hello {props.name} age {props.age}</h5>
      {props.children}
   </div>
);
}

export default Greet;