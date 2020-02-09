import React from 'react';
import Greet from './Components/Greet';
import Hi from './Components/Welcom'
import Message from './Components/message'
import K from './Components/state';
import Count from "./Components/counter";
import Destructure from './Components/destructure';
import Listen from './Components/eventListner'
import Nest from './Components/nestListner'
import methodAsProps from "./Components/methodAsProps";
import MethProp from './Components/methodAsProps';
import TestFrag from './Components/testFragment'

function App() {
  return (
    <React.Fragment className="App">
      {/* <Greet name='darby' age='23' ><h1>heyy</h1></Greet>
      <Greet name='judas' age='14' />
      <Greet name='naito' age='34' />
      <Hi name="judasssss"/> */}

      {/* <Destructure lastname='bottle' gender='33' /> */}
      {/* <Message /> */}
      {/*<Listen />*/}
      {/* <K/> */}
      {/* <Count  /> */}
      {/* <Nest /> */}
      {/* <MethProp /> */}
      <TestFrag />
    </React.Fragment>
  );
}

export default App;
