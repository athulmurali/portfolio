import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Router from "./Routing/Router";

class App extends Component {
  render() {
    return <div className="App">


        <Router/>

        <h5> Check out my portfolio and cya soon! </h5>
      </div>
  }
}

export default App;
