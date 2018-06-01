import React, { Component} from 'react';
import ConnectedCodemirror from '../codeeditor/Codemirror';
import ConnectedControlpanel from '../controlpanel/Controlpanel';
import ConnectedCodeHeader from '../Code_header';
import VariablesInspector from '../VariablesInspector/VariablesInspector';

import {store} from '../../store';
import {fetchCodeWalkData} from 'actions/dataLoadActions';

import './styles.css';


class CodeWalkLayout extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
     store.dispatch(fetchCodeWalkData());
  }

  render() {
    return (
      <div >
      <ConnectedControlpanel />
      <ConnectedCodeHeader style={{"display": "flex", justifyContent: "space-between"}} />
      <div >
        <ConnectedCodemirror style={{width: "500px"}} />
        <VariablesInspector style={{flexBasis: "1 | auto"}} />
      </div>
      </div>
    );
  }
}

export default CodeWalkLayout;
