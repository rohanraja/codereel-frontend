import React, { Component} from 'react';
import {Router, Route, Link } from 'react-router-dom'

import CodeWalkLayout from "../CodeWalkLayout/CodeWalkLayout"
import {OnCodeWalkEnter} from "../../routes/callbacks"

import './styles.css';

import Threadselector from '../Threadselector' ;

class AppLayout extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="wrapper">
        <div className="box header">Header</div>
        
      <div className="box sidebar">
        <Threadselector
        />
      </div>

        <div className="box content">
          <CodeWalkLayout/>
        </div>
        <div className="box footer">Footer</div>

      </div>
    );
  }
}

export default AppLayout;
