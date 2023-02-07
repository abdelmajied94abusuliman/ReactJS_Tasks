import React from 'react';
import './App.css';

import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';



// import Todos from './components/Todos';



// This way if you want to import all exports from file :
// import * as exportData from './exportData';



// import {Child as Header} from './Child';


// if you want to import just one thing use this : 
// import {x} from './exportData';

// Or if you want to give a Specific Name When you call it :
// import {x as Abood} from './exportData';

class App extends React.Component {
  render() {
  return (
    <div className="App">

      <Header />

      <Body />


      <Footer />



      {/* <Header />


      <exportData.Child />


      <h2>{exportData.sayHello()}</h2>


      <h3>{exportData.x}</h3>


      <Todos /> */}
      

      {/* if you used function as default export use this : */}
      {/* <h4>{exportData.default()}</h4> */}

      {/* and if you used const as default export use this :  */}
      {/* <h4>{exportData.default}</h4> */}






    </div>
  );
}
}

export default App;
