import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Number.js'

class App extends Component {
  state ={number : 1}
  
  showAlert() {
    alert("now you know how to handle onclick event");
  }

  updateNumber = () =>{
    let newNumber =  this.props.onClickWho(this.state.number)
    //this.state.number++;
    //this.setState({number : this.state.number})
    this.setState({number : newNumber});
  }

  render() {
    return (
      <div>
        <button onClick={this.updateNumber}>Hello world! {this.props.who}</button>
        <span><Number></Number> : {this.state.number}</span>
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
