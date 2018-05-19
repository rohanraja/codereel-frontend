import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from "./components/AppLayout/AppLayout"


class App extends Component {
  render() {
    return (
      <div className="App">
      <AppLayout/>
      </div>
    );
  }
}

export default App;
