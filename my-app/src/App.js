import React from 'react';
import Greet from './Components/Greet';
import Hi from './Components/Welcom'
import Message from './Components/message'
import K from './Components/state';
import Count from "./Components/counter";
import Destructure from './Components/destructure';
import Listen from './Components/eventListner'

function App() {
  return (
    <div className="App">
      {/* <Greet name='darby' age='23' ><h1>heyy</h1></Greet>
      <Greet name='judas' age='14' />
      <Greet name='naito' age='34' />
      <Hi name="judasssss"/> */}

      {/* <Destructure lastname='bottle' gender='33' /> */}
      {/* <Message /> */}
      <Listen />
      {/* <K/> */}
      {/* <Count /> */}

    </div>
  );
}

export default App;
