import React, { Component} from 'react';
import ObjectInspector from "./ObjectInspector";

class VariablesInspector extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.varsData;

    return (
      <div>
        <ObjectInspector 
          objectData = {data}
        />
      </div>
    );
  }
}

export default VariablesInspector;
