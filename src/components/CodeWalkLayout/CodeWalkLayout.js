import React, { Component} from 'react';
import ConnectedCodemirror from '../codeeditor/Codemirror';
import ConnectedControlpanel from '../controlpanel/Controlpanel';
import ConnectedCodeHeader from '../Code_header';
import VariablesInspector from '../VariablesInspector/VariablesInspector';

import './styles.css';


class CodeWalkLayout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
    <div className="box header">Header</div>
    <div className="box sidebar">Sidebar</div>
    <div className="box sidebar2">Sidebar 2</div>

    <div className="box content">
      <ConnectedControlpanel />
      <ConnectedCodeHeader style={{"display": "flex", justifyContent: "space-between"}} />
      <div >
        <ConnectedCodemirror style={{width: "500px"}} />
        <VariablesInspector style={{flexBasis: "1 | auto"}} />
      </div>
    </div>

      <div className="box footer">Footer</div>

      </div>
    );
  }
}

export default CodeWalkLayout;
