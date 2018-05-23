import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from "./components/AppLayout/AppLayout"
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
  <BrowserRouter>
      <AppLayout/>
  </BrowserRouter>
      </div>
    );
  }
}

export default App;
