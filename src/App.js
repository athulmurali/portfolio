import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Router from "./Routing/Router";

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, I am Athul</h1>
        </header>
        <p className="App-intro">
          To get started, edit
            <code>src/App.js</code> and save to reload.
        </p>

        <Router/>

        <h5> Cya soon! </h5>
      </div>
  }
}

export default App;
