import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  showAlert() {
    alert("now you know how to handle onclick event");
  }

  render() {
    return (
      <div>
        <button onClick={this.showAlert}>Hello world!</button>
        <span>number : 0</span>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
