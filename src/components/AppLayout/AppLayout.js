import React, { Component} from 'react';
import {Router, Route, Link } from 'react-router-dom'

import CodeWalkLayout from "../CodeWalkLayout/CodeWalkLayout"
import {OnCodeWalkEnter} from "../../routes/callbacks"
import {store} from '../../store';
import {fetchCodeWalkData} from '../controlpanel/actions';

class AppLayout extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
     store.dispatch(fetchCodeWalkData());
  }

  render() {
    return (
      <div>
      CodeVines Main Layout
      <Route exact path="/codewalk" component={CodeWalkLayout} />
      </div>
    );
  }
}

export default AppLayout;
